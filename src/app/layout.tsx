import '../styles/globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React, { useState } from "react";
import PageHeader from '../components/Header/PageHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VinayYadava',
  description: 'Generated by VinayYadava',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en">
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <div className="header-margin"><PageHeader /></div>

        {children}
      </body>
    </html>
  )
}