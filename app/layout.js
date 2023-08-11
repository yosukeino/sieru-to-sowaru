import Nav from './components/nav'
import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: '学習塾 | シエルとソワル | 宇都宮市',
  description: '既存の塾とは異なる新しい学習法で生徒の成績をアップ！自治医科大学医学部に合格したメソッドで学力アップ♪学習塾シエルとソワルです！',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body><Nav />{children}</body>
    </html>
  )
}
