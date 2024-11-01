/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_SPACE_UID: string;
	readonly VITE_CDN_API_TOKEN: string;
	readonly VITE_BLOG_APP_UID: string;
	readonly VITE_BLOG_MODEL_UID: string;
	readonly VITE_NEWS_APP_UID: string;
	readonly VITE_NEWS_MODEL_UID: string;
	readonly VITE_FAQ_APP_UID: string;
	readonly VITE_FAQ_MODEL_UID: string;
	readonly VITE_SUPABASE_URL: string;
	readonly VITE_SUPABASE_ANON_KEY: string;
	readonly VITE_WORKER_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
