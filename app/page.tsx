
import { Inter } from 'next/font/google'
import { PrismaClient } from '@prisma/client'

const inter = Inter({ subsets: ['latin'] })

const createUser = async () => {

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
                    condition: "second hand",
                }
            }
        },
        include: {
            sold: true
        }
    })
    return user

}

export default async function Home() {
    const user = await createUser()
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <p>
                {user.fname} {user.lname}
            </p>

        </main>
    )
}

