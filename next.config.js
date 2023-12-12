/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "firebasestorage.googleapis.com",
      "res.cloudinary.com",
      "m.media-amazon.com",
      "assets2.ignimgs.com",
      "www.goha.ru",
      "www.hollywoodreporter.com",
      "static0.gamerantimages.com",
      "images.hdqwalls.com",
      "assets-prd.ignimgs.com",
      "assets.xboxservices.com",
      "cdn.hobbyconsolas.com",
      "compass-ssl.xbox.com",
      "media.vandal.net",
      "i.blogs.es",
      "s3.us-east-1.amazonaws.com",
      "static.independent.co.uk",
      "cdn02.nintendo-europe.com",
      "images.nintendolife.com",
      "image.api.playstation.com",
      "i.redd.it",
    ],
  },
  async headers() {
    return [
      {
        // Routes this applies to
        source: "/api/(.*)",        
        headers: [          
          {
            key: "Access-Control-Allow-Origin",
            value: "*",            
          },          
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },          
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
