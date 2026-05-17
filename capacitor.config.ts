import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.kakeru.app",
  appName: "KAKERU",
  webDir: "www",
  server: {
    url: "https://www.kakeruapp.com",
    cleartext: false,
  },
  ios: {
    contentInset: "always",
  },
};

export default config;
