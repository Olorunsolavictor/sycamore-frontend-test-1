import FacebookIcon from "@/assets/images/footer/footer-icon-facebook.png"
import TwitterIcon from "@/assets/images/footer/footer-icon-x.svg"
import PinterestIcon from "@/assets/images/footer/footer-icon-pinterest.svg"
import MailIcon from "@/assets/images/footer/footer-icon-mail.svg"
import InstagramIcon from "@/assets/images/footer/footer-icon-instagram.svg"

export const useFooterData = () => {
  const socialLinks = [
    { href: "#", icon: FacebookIcon },
    { href: "#", icon: TwitterIcon },
    { href: "#", icon: PinterestIcon },
    { href: "#", icon: MailIcon },
    { href: "#", icon: InstagramIcon },
  ]

  const footerSections = [
    {
      title: "PRODUCTS 🔥",
      links: ["HR Management", "Invoice System", "Email Marketing", "Web Services", "Digital Marketing"],
    },
    {
      title: "WHY CHOOSE ✨",
      links: ["Customers", "Why Staco ?", "Book a demo"],
    },
    {
      title: "RESOURCES ➕",
      links: ["Latest Blog", "Supports", "Knowledgebase", "FAQs"],
    },
    {
      title: "COMPANY 💎",
      links: ["About", "What we do", "Contact us", "Careers"],
    },
  ]

  const bottomLinks = ["Terms and conditions", "Cookies", "Privacy policy"]

  return { socialLinks, footerSections, bottomLinks }
}
