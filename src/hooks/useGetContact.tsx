'use client'
import github from '@/image/contact/github.png'
import linkedin from '@/image/contact/linkedin.png'
import facebook from '@/image/contact/facebook.png'
import twitter from '@/image/contact/twitter.png'
import twitterDark from '@/image/contact/twitter-dark.png'
// import gmail from '@/image/contact/gmail.png'
import whatsapp from '@/image/contact/whatsapp.png'
import telegram from '@/image/contact/telegram.png'
import useTheme from "./useTheme"

const useGetContact = () => {
    const {theme} = useTheme()
    const contactItems = [
        {
            img: github,
            link: 'https://github.com/mdshehabsk',
            name:'Github'
        },
        {
            img: linkedin,
            link: 'https://www.linkedin.com/in/shehab-uddin-1281b0210',
            name:'Linkedin'
        },
        {
            img: facebook,
            link: 'https://www.facebook.com/1mdshehabsk',
            name:'Facebook'
        },
        {
            img: theme === 'dark' ?  twitterDark : twitter ,
            link: 'https://x.com/mdshehabsk',
            name:'Twitter'
        },
        {
            img: whatsapp,
            link: 'https://wa.me/+8801612212699',
            name:'Whatsapp'
        },
        {
            img: telegram,
            link: 'https://t.me/mdshehabsk',
            name:'Telegram'
        },
        // {
        //     img: gmail,
        //     value: 'mdshehabsk@gmail.com',
        //     name:'Gmail'
        // },
    ]

    return {contactItems}
}

export default useGetContact