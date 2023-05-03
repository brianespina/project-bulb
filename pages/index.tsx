
import { Inter } from 'next/font/google'
import { GetStaticProps, InferGetStaticPropsType, GetStaticPropsResult } from 'next'
import { db } from '../firebase/firebase'
import { doc, getDoc } from "firebase/firestore";

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


export default function Home({ section }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p>{section.heading}</p>
      <p>{section.itemsPerRow}</p>
      <p>{section.alignment}</p>
      <p>{section.theme}</p>
    </main>
  )
}

export const getStaticProps: GetStaticProps<{ section: ContentBoxes }> = async () => {

  const docRef = doc(db, "content-boxes", "eCDpO5itvvncHzJqzb3J")
  const docSnap = await getDoc(docRef)
  const data = docSnap.data() as ContentBoxes

  return {
    props: {
      section: data
    }
  }

}

