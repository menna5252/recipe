import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logo-BfNap0Pe.png'
import Link from 'next/link'


export default function Footer() {
  return (
    <footer className="bg-white rounded-t-3xl shadow-sm mt-10 font-cursive">
    <div className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-xl">Recipe</span>
        </div>

        <Link href="/" className="text-blue-600 font-bold hover:underline">
          Route
        </Link>
      </div>

      <hr className="my-4 border-gray-200" />

      <p className="text-center text-gray-500 text-sm">
        © 2025 <span className="italic">Nagy Osama</span>. All Rights Reserved.
      </p>
    </div>
  </footer>  )
}
