
import { Inter } from 'next/font/google'
import { GetStaticProps, InferGetStaticPropsType, GetStaticPropsResult } from 'next'
import { PrismaClient } from '@prisma/client'


const inter = Inter({ subsets: ['latin'] })

interface Boxes {
  title: string
  content: string
}

interface ContentBoxes {
  layout: string
  itemsPerRow: number
  heading: string
  content: Boxes[]
  width: string
  alignment: string
  theme: string
}


export default function Home({ user }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

    </main>
  )
}

export const getStaticProps: GetStaticProps<{ section: ContentBoxes }> = async () => {

  const prisma = new PrismaClient();
  await prisma.user.deleteMany();
  await prisma.user.create({
    data: {
      email: "espinabrian@gmail.com",
      fname: "Brian Nicolas",
      lname: "Espina"
    }
  })

  return {
    props: {
      user: {}
    }
  }

}

