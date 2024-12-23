import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import { prisma } from '@/lib/db'

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers : [Google],
    callbacks : {
        async signIn({account, credentials, email, profile, user}) {
            
            try {
                
                const dataFeed = await prisma.user.create({
                    data : {
                        userId : user.id!,
                        name : user.name!,
                        firstName : profile?.given_name!,
                        lastName : profile?.family_name,
                        email : user.email!,
                        picture : user.image!
                    }
                })

                console.log(` User with id : ${dataFeed.userId} `)

            } catch(err) {
                console.log("There was an error in creating the user");
                console.log(err);
            }


            return true;
        }
    }
})