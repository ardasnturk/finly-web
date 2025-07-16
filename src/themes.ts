export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export const lightTheme: Theme = {
  primary: "#3B82F6",
  secondary: "#1E40AF",
  background: "#FFFFFF",
  text: "#1F2937",
};

export const darkTheme: Theme = {
  primary: "#60A5FA",
  secondary: "#93C5FD",
  background: "#111827",
  text: "#F9FAFB",
};
