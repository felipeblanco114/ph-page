import "@/styles/styles.css";

export const metadata = {
  title: 'Benjamin Aguirre',
  description: 'Benjamin Aguirre, fotografía',
}

export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
