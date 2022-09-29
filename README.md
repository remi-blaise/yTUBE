This was made for a technical test.
The instruction are saved in `test-technique-full/sujet.pdf`.

# How to install

The `react-search-field` package is a bit old, therefore you need:
`npm i --legacy-peer-deps`

# What has been done?

I made a full Youtube-like interface with:
- a infinite-scroll feed
- a top bar with a search field
- a page for each video
- a log-in system that blurs out videos when not connected

It benefits from the full Next.js technology:
- the video feed is loading from an **API route** with a **pagination system**. The API returns static results as there is not a real video database, but I have shown how to use the `page` parameter.
- different types of rendering methods have been used depending on the situation:
    * The video feed is using **Client-Side Rendering** for loading always-changing, user-specific content.
    * The `search` page and individual video page are using **Server-Side Rendering** for fast-rendered, cacheable content.
- the login system is made with the **NextAuth** library:
    * provides numerous auth methods like the email-magic method.
    * is plugged to a database through **Prisma** ORM.
    * is plugged to an SMTP server through the **nodemailer** library.

Hosting:
- the Next.js app is hosted on **Vercel**.
- the PosgreSQL user database is hosted on **Heroku**.
- the SMTP server is using the **sendinblue** service.
