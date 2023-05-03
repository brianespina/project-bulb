
import { Inter } from 'next/font/google'
import { GetStaticProps, InferGetStaticPropsType, GetStaticPropsResult } from 'next'
import { PrismaClient } from '@prisma/client'
import { use } from 'react'


const inter = Inter({ subsets: ['latin'] })


export default function Home({ user }: InferGetStaticPropsType<typeof getStaticProps>) {

  console.log(user)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p>{user.fname} {user.lname}</p>
      <p>{user.email}</p>
    </main>
  )
}

export const getStaticProps = async () => {

  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();
  let user = await prisma.user.create({
    data: {
      email: "espinabrian@gmail.com",
      fname: "Brian Nicolas",
      lname: "Espina",
      sold: {
        create: {
          name: "Tatami Gi",
          desc: "good tatami Gi",
          price: 2,
          condition: "second hand"
        }
      }
    },
    include: {
      sold: true
    }
  })

  return {
    props: {
      user: user
    }
  }

}

