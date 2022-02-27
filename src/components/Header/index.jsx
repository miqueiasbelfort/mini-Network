import {Heade, IconLogo, NameLogo, BellIcon, Image} from "./style"


export default function Header({popup}) {
    return (
      <Heade>
          <div className="logotipo">
              <IconLogo/>
              <NameLogo>Simple Network</NameLogo>
          </div>
          <div className="icons">
              <BellIcon onClick={popup}/>
              <Image src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2Fd4ad40103067131.5f450dd53ccd1.png&f=1&nofb=1" alt="perfil Photo" />
          </div>
      </Heade>
    )
}
