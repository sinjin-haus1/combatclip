# CombatClip 🐊

**AI Faceless Video Generator for Combat Sports Coaches**

Generate viral TikTok/Reels/Shorts for boxing, MMA, BJJ, kickboxing, and wrestling coaches — without showing your face. Upload footage, pick a style, let AI do the rest.

## Features

- 🎬 **AI Video Generation** — FFmpeg-powered rendering with combat-specific templates
- 🎙️ **Voiceover Generation** — OpenAI TTS with combat-specific hooks ("This is what proper technique looks like")
- 📱 **Multi-Platform Posting** — TikTok, Instagram Reels, YouTube Shorts
- 📊 **Dashboard** — Track videos, views, scheduling, and analytics
- 🏷️ **Auto Hashtags** — Style-specific trending hashtags (jiujitsutok, boxingtiktok, mmatok, etc.)
- 🖤 **Faceless Model** — Perfect for coaches who prefer anonymity

## Combat Styles

| Style | Hashtags | Template Vibes |
|-------|----------|----------------|
| 🥊 BOXING | boxingtiktok, fightnight | Shadow effects, heavy bag power |
| 🥊 MMA | mmatok, mixedmartialarts | Cage backdrop, clinch work |
| 🥊 BJJ | bjjtiktok, jiujitsu | Mat texture, submissions |
| 🥊 KICKBOXING | kickboxingtiktok, striking | Combos, defensive shells |
| 🤼 WRESTLING | wrestlingtiktok | Takedowns, pins |
| 🥊 MUAY_THAI | muaythai, elbow | Elbow slash, knee strikes |
| 🥊 JUDO | judo, throw | Ippon effects, kuzushi |
| 🥊 TAEKWONDO | taekwondo, kick | Precision kicks, spins |

## Tech Stack

- **Backend:** NestJS + MongoDB + GraphQL
- **Frontend:** Next.js 14 + Material UI (dark athletic theme)
- **Video:** FFmpeg
- **Audio:** OpenAI TTS
- **Storage:** Cloudinary
- **Social:** TikTok, Instagram, YouTube APIs

## Quick Start

```bash
# Clone the repo
git clone https://github.com/sinjin-haus1/combatclip.git
cd combatclip

# Backend setup
cp .env.example .env
# Fill in your .env with real API keys

# Start with Docker
docker-compose up

# Or local dev
npm install
npm run start:dev
```

## Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/combatclip
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
OPENAI_API_KEY=sk-your-openai-key
TIKTOK_CLIENT_KEY=your-tiktok-client-key
TIKTOK_CLIENT_SECRET=your-tiktok-client-secret
INSTAGRAM_CLIENT_ID=your-instagram-client-id
INSTAGRAM_CLIENT_SECRET=your-instagram-client-secret
YOUTUBE_CLIENT_ID=your-youtube-client-id
YOUTUBE_CLIENT_SECRET=your-youtube-client-secret
PORT=3000
FRONTEND_URL=http://localhost:3001
```

## Revenue Model

- **Free:** 5 videos/month
- **Pro ($29/mo):** 50 videos/month, priority rendering, analytics
- **Elite ($79/mo):** Unlimited, multiple social accounts, API access

## Trending Hashtags

```
jiujitsutok bjjtiktok boxingtiktok mmatok kickboxingtiktok 
wrestlingtiktok martialartstiktok combatspo fightnight 
punchcombinations grappling strikers cornerfight
```

## License

MIT
