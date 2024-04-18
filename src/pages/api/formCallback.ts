import { GoogleSpreadsheet } from 'google-spreadsheet';
import type { NextApiRequest, NextApiResponse } from 'next';

interface FieldSchemaValues {
  Data: string
  phoneNumber: string
  pageTitle: string
  pagePath: string
}

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_CALLBACK_ID);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Incorrect form request'
    });
  }

  // Получаем данных из запроса с формы
  const {
    phoneNumber,
    pagePath,
    pageTitle
  }: FieldSchemaValues = req.body;

  // Валидируем данные
  if (!phoneNumber) {
    return res.status(400).json({
      error: 'Please provide phoneNumber'
    });
  }

  // Авторизируем наш новый клиент
  await doc.useServiceAccountAuth({
    client_email: `${ process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL }`,
    private_key: `${process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/gm, '\n')}`
  });

  await doc.loadInfo();
  const data = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  const sheet = await doc.sheetsByIndex[0];

  // Добавляем заголовки столбцов
  await sheet.setHeaderRow([
    'Data',
    'Phone',
    'Title',
    'Path']);

  // Пишем данные в фаил
  await sheet.addRow({
    Data: data,
    Phone: phoneNumber,
    Title: String(pageTitle),
    Path: String(pagePath)
  });
  
  return res.status(200).json({});
}
