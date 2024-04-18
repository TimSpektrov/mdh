const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: isProd ? 'https://json-server-delta-three.vercel.app' : 'http://localhost:3000/api',
    GOOGLE_SERVICE_ACCOUNT_EMAIL: 'mdh-303@mdh-one.iam.gserviceaccount.com',
    GOOGLE_PRIVATE_KEY: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDLcEerq3EkXoIQ\nCzpVss+Ik5iIOs36bTHqr9JXOi+2hO3jxiUVGjgnWG9LxLs2UVMTVsYDol6nPQNI\n8PteEmwOWJDCdgVJZPxfolx+NuYAyIC+DDJ7Y9N/+zwMxQAaytIlQZsz/k2k5mMU\npM/vMv5kjdS1G0v8wNtWOAlPt5NEE5SZizXlOGCVSOEqAbyUjxHVGJwKmfdyd2kV\n3uX4cUWG9ZWBszLubjZFugrvlCN8ZBjn9zUX/qOlN0wLEMmGh+gX36bWi/9AEy5c\n/2Bu5WVT7dtUD7s48YG37AIHJh2caOPdU6gEV1B3VFblynfFXFZpzB/fxdbqh3al\nVhFqofvhAgMBAAECggEARCSX3SjP/R6q8jTQlWQPn+/QZ9FKrVdmIPZDvnP/B2P/\nSwxT332o0YUNwpNjIg6bhR7LtOvuSJZnQ0d0603AZA3Gb1yY6LyqzF3WHXDGGf0P\nIplzT2Fgtr2wn5ZdMpw9R71x/zhvSYziI0gRXk32aDgZx5AdI8x1q6uZctpKucI8\nJEBOaCo9BxikLWOg3PS6h0KtVyhMTEhmwiVVP94eK17LqAXxbeujrIe+zQXRDXcu\npGv8oGD0VoGMJNWa9dkqc1kIrKYLJfiSwszWx+SQOP07PeVaqGyPE0zWs8y/6+li\nOlomSCG0tyKleTofseirBbmGAyjDQoHdXAce9nZzAQKBgQDxZVAS5kEdewppTjpJ\n5u51PoQg14fDHh1ZLnNIaBh0hSWkkOHG44dyGOsQDixQ7EWBEnja+z3FeVlCKFK5\nql6MPa5bI43hWr0TyCzvVYjwPeI1qEzj/ooexvJx6QDdlQLbWgumYAeYb1IXCi2v\nyQ5irxXTltHvMpZjpMZh1L8pkwKBgQDXvxg2rPPXzF7NnnylbHFRQMgc237CRS7s\ns8fkCKhTgjiJHiP4f72C9dF1yXfkQCnVdaZFEfWeFZg5NHKus0AegVXp3D5mJvjk\n5c5pZMwhJk7012p8AxbhE7phFwPOqx14y7hTV1f3Lov92n9h97qVJcLZYoeb1P1k\nAaDpFUNdOwKBgHBKZqNEBMpH8CHoR+kUyZw0hpYYbIjxO0m+99WYxrd9MHOLCdvQ\n/7KtsLr5PNgv8G0IQLvs32E6/7BsvX6sp+qozrCKq3dHFGldVrnGmjrXLqEzNwFf\n6LREa4ddkg+BP6D2FDFCvoXEUvVwwKvi5RQ2yfpxUBrq91ZG0hm0M3CNAoGAelfX\nN0okjP9L03ZIYNZ5/AWsdRDTdP8eeQQKGnn+WjzCKp947nYh1Z3oRc8Vuc3Y6z9o\nJkrk6dx9EhN35TGo7qORQKiwieUXx1W6E3Ihf7rlk1qE/AYUd1ZknqIaepv2foWn\n5Trmmzk+EZpSGhANMn7TW8rP88J4Xrm9se9o3/kCgYBMe9TtD2mfmSjx6po+r2bz\ndtJzbVcHQhHfROl688qGeoDelzAD//UReZBoyrGPhpX5h//Cx56rrhbMp+IjtnRW\n1Er0EJaDwn0U4CNB4AkWxcnyUPZyJZ28NnTOqRHaj4aqgWWDiwOTWm0MyBnl7JKj\n/NPD0JTYNJmxOctRZ1ch7A==\n-----END PRIVATE KEY-----\n',
    GOOGLE_SHEET_CALLBACK_ID: '1IZd2mtOZDK75V1VpGSjr5tCxAm1cBgvh8nGjvzZBdXY',
    GOOGLE_SHEET_MODAL_ID: '1NXHpsRfbZnuk5vWgl2U4d0NUY2LJiEYxRBd1Lqm4Dlk',
    GOOGLE_SHEET_FEEDBACK_ID: '1_9iIz_L0yzxSoiPRcM9TyrLWbjOa3eKucJQn5wQLaXI',
    PAGE_NOT_FOUND: isProd ? true : false,
    YM_COUNTER_ID: 94183333,
    GA_MEASUREMENT_ID: 'G-L5FWVBZWDP'
  },
  // trailingSlash: true,
  distDir: '.next',
  images: {
    deviceSizes: [360, 576, 768, 960, 1200, 1400, 1536, 1920, 3076],
    formats: ['image/webp'],
    domains: ['mdhadmin.secreate.dev', 'localhost']
  }
};

module.exports = nextConfig
