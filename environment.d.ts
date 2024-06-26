declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string,
      NODE_ENV: 'development' | 'production';
      PORT?: number;
    }
  }
}

export {}