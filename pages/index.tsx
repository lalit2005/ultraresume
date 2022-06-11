// import { Box, Button, Container, Text } from "@chakra-ui/react";

// import { DarkModeSwitch } from "../components/DarkModeSwitch";

// const Index = () => (
//   <Box maxW="5xl" mx="auto">
//     <DarkModeSwitch />
//     <Text fontSize="5xl" mt={100} fontWeight="black">
//       Scaffold your next project with{" "}
//       <Text
//         bgGradient="linear(to-l, #7928CA, #FF0080)"
//         bgClip="text"
//         fontSize="6xl"
//         as="span"
//         fontWeight="extrabold">
//         Nextie
//       </Text>
//     </Text>
//     <Box mt="20">
//       <Button size='lg' borderRadius="sm">View in GitHub {"->"}</Button>
//     </Box>
//   </Box>
// );

// export default Index;
import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        {children}
      </Box>
      <Box ml={['5', '20', '72']} pr='14' pt='20' px='14'>
        <DarkModeSwitch />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia autem
          molestiae non placeat aliquam ipsum provident illum, eum facere
          necessitatibus amet! Ad ea recusandae eum doloribus earum reiciendis
          cupiditate, ipsam deleniti excepturi expedita a architecto quod quis
          rem minima fuga fugit? Possimus, fugit harum. Tempore assumenda fugiat
          debitis praesentium quod doloribus quibusdam nulla ratione in qui,
          eveniet nemo. Explicabo enim dicta sint natus, perferendis consequatur
          deserunt a, ducimus molestiae, quis est illo repudiandae quae numquam
          ipsam vitae ea sapiente reprehenderit voluptas earum aliquam quasi
          magnam animi! Veritatis autem voluptas sit molestias totam, illum
          maxime, similique modi aperiam accusamus rerum reprehenderit tempore
          rem magnam! Molestiae consequatur quisquam inventore ab repellendus
          quasi odit rem vel, perspiciatis, tenetur, iste blanditiis accusamus.
          Libero recusandae vero reiciendis fugiat a! Illum illo eligendi nemo
          harum a ex explicabo quod perferendis, ipsa dolorum dolorem ipsum
          praesentium tenetur esse aspernatur est doloribus accusantium quos
          tempora, natus veniam! Quod, tempora. Voluptatum recusandae totam amet
          laborum et dolore nihil blanditiis, atque nostrum dolores voluptatibus
          possimus laboriosam sunt eligendi, iure rem reprehenderit? Ab vero
          repellat sint praesentium in, quo animi neque unde, eos, explicabo
          nulla saepe quidem. Maiores neque ex omnis quia modi error, iste
          accusamus soluta dolores in, ipsum eum a dolorum quae, dolor magni
          corrupti quidem. Doloribus animi recusandae est perspiciatis, facilis
          vel ducimus harum? Pariatur quos illum, aut veritatis, consequatur ea
          tempore dignissimos praesentium sit impedit, architecto obcaecati. Est
          dolor ea deleniti recusandae. Nam est molestiae blanditiis iusto?
          Distinctio doloribus non sequi natus totam delectus beatae iste
          tenetur eaque, sunt, nobis dolorem eius neque reiciendis dolor!
          Numquam soluta explicabo est veritatis vel sint ex non asperiores
          veniam quis? Consectetur unde vero ipsam repudiandae perferendis. Eos,
          at ipsa. Soluta, voluptas. Quia corporis id voluptatum veritatis
          consectetur sapiente saepe odit? Deleniti, alias omnis rem labore
          perferendis incidunt iusto minus necessitatibus voluptatibus excepturi
          ducimus quaerat eligendi libero quidem soluta dolorum aut minima
          reiciendis, nemo quia iure eos quas aperiam dolorem! Dolor
          perspiciatis accusamus nam quas dolores quidem laborum cumque rem modi
          nemo! Quia, cumque accusantium repudiandae possimus harum maiores
          quidem dolorem necessitatibus asperiores repellat id velit dignissimos
          distinctio expedita voluptas ipsum officia, nisi fugit quibusdam
          facere. Officia id sed officiis modi ipsa nesciunt praesentium
          veritatis omnis eum porro, voluptatibus vel asperiores, explicabo aut
          dolorem quisquam eaque impedit deserunt sapiente quod velit? Quaerat
          praesentium molestias beatae quis in. Dolorum, necessitatibus
          perspiciatis, eveniet molestiae quidem suscipit commodi qui nemo cum
          deleniti eius esse consectetur corrupti odio possimus quam nisi.
          Voluptates aspernatur officia eveniet iste nobis. Maxime, tempore
          expedita eum doloremque exercitationem esse vel ea! Vel corrupti vitae
          debitis officiis sapiente doloribus unde veniam sit aut nemo magni at,
          perferendis qui totam mollitia, ipsa enim odio aliquam repellat, hic
          molestias. Dolorem repudiandae cum culpa eligendi omnis incidunt
          consectetur quos, maxime perspiciatis excepturi saepe ex aspernatur,
          impedit sapiente dolores! Dolore sit explicabo officia quia eum
          deleniti, magnam nostrum laborum dicta, neque ex excepturi quaerat
          sint totam voluptate dolor perspiciatis corporis architecto? Incidunt
          dignissimos aut quaerat ratione repudiandae sunt omnis mollitia
          corrupti? Sapiente iste non quo! Qui necessitatibus, dolorum, corporis
          praesentium reiciendis quo possimus, amet ea libero cumque expedita
          modi? Aut animi doloremque provident minima facere incidunt tenetur
          sunt dicta? Modi quas hic architecto qui magni voluptatem assumenda
          corporis provident? Maiores saepe, esse nam libero repudiandae facilis
          enim nobis deserunt doloribus quasi consequuntur rerum distinctio.
          Tenetur minus repudiandae officiis ipsa vero cupiditate recusandae
          necessitatibus saepe, sunt voluptatibus distinctio delectus
          repellendus error id quasi commodi a. Amet, libero omnis? Tempore odio
          voluptate ex quibusdam, obcaecati esse id! Assumenda itaque maxime
          placeat tempora officiis, at reiciendis ab tempore necessitatibus,
          praesentium eligendi quis perspiciatis sint quidem exercitationem!
          Quod vel nesciunt ipsam assumenda odio eligendi ratione sunt eveniet,
          obcaecati fugiat eum modi minima illum labore necessitatibus
          aspernatur maiores numquam, soluta ea quam deserunt voluptatum
          suscipit? Expedita quasi, ipsum ut optio tenetur similique facere
          cumque nesciunt provident, reiciendis necessitatibus assumenda nihil
          porro, earum illum iusto. Dicta incidunt veritatis beatae provident
          similique ad iure, nobis error nulla nam alias, aliquid vero
          aspernatur adipisci eos nihil ducimus sint sequi repellendus. Error
          velit, cumque ab odit, perferendis ducimus, maxime animi natus iusto
          sequi ex repellendus inventore molestias incidunt. Nobis, quam
          numquam. Eveniet, tempora omnis incidunt, dignissimos accusamus
          molestias provident voluptate commodi, porro libero assumenda
          temporibus debitis. Saepe, eveniet. Laudantium obcaecati ad sapiente!
          Quo dicta sunt deserunt minima enim consectetur, facere doloribus sint
          voluptatibus mollitia qui doloremque aliquid exercitationem cum quasi
          quisquam commodi porro iure eveniet nam ipsum. Optio cum non, hic,
          aliquid tempore nobis harum odio quo quidem, id modi doloremque
          deleniti animi dolores rerum iusto incidunt dolorem facilis quis
          deserunt sit dignissimos quasi nostrum. Provident maiores repudiandae
          eum quibusdam assumenda quasi alias, error veritatis dolor vel
          inventore optio excepturi neque quia rerum quidem eius architecto quo.
          Animi eum, suscipit quibusdam perspiciatis, error sequi quis,
          accusamus hic natus totam fugiat. Excepturi, nam ipsam error fugiat ad
          ea magni dignissimos labore quis eius voluptatem officiis fugit
          doloremque ullam, et impedit ducimus veritatis, nulla tempore quidem
          dolorem consequuntur fuga sunt. Nam sapiente, minima sit labore
          excepturi aspernatur illo voluptatibus debitis reprehenderit animi
          quam libero blanditiis quisquam quod vero quidem error praesentium
          pariatur, assumenda officiis corporis, recusandae at? Vel error
          eveniet possimus modi quos nemo sit odio fugit est saepe. Accusantium
          nisi sapiente mollitia quisquam incidunt perspiciatis ipsum nesciunt,
          repellat architecto quis itaque sequi voluptates aperiam laudantium.
          Sequi et excepturi quia ipsam magnam nam quam voluptatibus, placeat
          maxime earum aperiam magni error iste labore ab! Exercitationem
          voluptate praesentium molestiae. Doloribus quos ipsa perferendis saepe
          eum quia fuga blanditiis, repellendus quasi asperiores excepturi quis
          ex accusantium laborum itaque voluptatem praesentium voluptates et
          aliquam provident nostrum explicabo qui id a! Enim, sapiente.
          Dignissimos placeat perferendis, voluptates reiciendis corporis natus
          tempore non ducimus doloribus voluptatibus quis animi sed rerum autem
          quaerat obcaecati at explicabo aliquid iusto ea magnam ipsam! Soluta,
          autem debitis saepe asperiores commodi eos vitae dolores accusamus
          nobis quisquam animi laborum molestiae alias possimus reprehenderit
          est, officia eveniet. Labore totam architecto eos eius ea at quo
          tenetur? Deleniti dolorem officiis, consequuntur animi vero
          necessitatibus doloremque? Minima quisquam impedit, blanditiis numquam
          quis odit mollitia? Veritatis id, debitis perspiciatis quia officiis
          facere repellendus nam tempore assumenda maiores beatae temporibus
          earum, aliquid eius accusamus doloremque at aliquam odit, sed ea? Ea
          iure dolorem tempora nostrum ipsum quas praesentium consequuntur,
          laboriosam voluptatem provident exercitationem excepturi fugit
          delectus reprehenderit labore nesciunt, fuga doloremque inventore
          omnis repellendus? Iste sapiente, inventore commodi quod repudiandae
          aliquid voluptate dolores, aliquam nam nobis impedit! Hic facilis
          magnam qui culpa perspiciatis inventore ipsam, autem ut unde fuga
          aliquam aperiam, neque mollitia laborum cupiditate nisi incidunt,
          porro in dolore! Tenetur optio reiciendis hic. Asperiores, reiciendis.
          Optio explicabo quasi quibusdam reprehenderit delectus at! Omnis quis
          totam facere quisquam consequuntur illo mollitia voluptatum doloremque
          maiores ut voluptates ducimus deleniti, alias fugiat eaque illum
          explicabo pariatur ex laudantium cumque dicta. Ad voluptas quaerat
          facilis ab consequatur, qui non recusandae quia voluptatum fuga
          molestiae expedita labore aliquid eos iusto voluptatibus rem omnis
          atque provident possimus. Id blanditiis nulla enim exercitationem a et
          tenetur fugiat velit repudiandae, deserunt sequi minima, asperiores
          possimus ipsum ducimus quas neque eos voluptates non quod. Quaerat
          modi, hic fuga officiis minima ipsam autem beatae totam quam fugit
          corporis est nesciunt, suscipit aspernatur eaque adipisci. Impedit
          commodi nam porro numquam error quibusdam voluptatem facere quaerat
          delectus, animi, voluptas aliquid quisquam assumenda alias reiciendis?
          Qui nesciunt temporibus, ex eligendi ipsum minus repellendus suscipit
          eos repudiandae culpa odio? Expedita fugit dignissimos suscipit sunt
          tenetur, iure recusandae architecto placeat ipsa ipsum. Dolore
          consectetur aliquid earum blanditiis possimus, molestias accusamus eum
          modi pariatur facere iusto minima corrupti non cum dignissimos porro
          reiciendis est praesentium ullam beatae! Vitae, sit? Dicta, cum amet
          dolorem nesciunt ad ex, perferendis atque similique dolore quae omnis
          laborum placeat ipsa totam qui molestias sequi impedit officiis
          mollitia alias dignissimos laboriosam et vero! Recusandae expedita
          dolor sint minus accusantium rerum hic, alias aliquam possimus, fuga
          ratione odit incidunt harum nulla, minima earum cum nihil labore!
          Assumenda explicabo eligendi accusamus voluptate a, totam odit dolor
          harum suscipit nobis in repellat quis eius consequatur at praesentium
          eveniet corporis! Quas illum fugit temporibus iure deleniti. Incidunt
          ipsam aut aliquam cum iste molestiae minus praesentium unde odio
          accusamus magni fuga, at placeat velit soluta error repudiandae
          deleniti eligendi facere ad? Earum in doloribus inventore quae
          blanditiis aspernatur consectetur, esse id ad similique aliquam.
          Maiores, pariatur in distinctio nesciunt nobis animi aut, blanditiis
          assumenda cupiditate nisi sunt laboriosam cumque at ipsam quibusdam
          quasi officiis obcaecati quod praesentium ipsa qui? Dolorum dolorem ad
          sequi excepturi harum, a fuga non sapiente qui sint error! Ipsum
          excepturi, rerum necessitatibus, a nobis libero quia fugiat veritatis,
          atque debitis porro voluptatem. Repellendus temporibus eaque
          consectetur, velit cumque nihil rem error ipsam, expedita, debitis
          quasi dolor iste quo architecto at et aspernatur veniam quis earum
          ipsa sapiente alias? Quibusdam, quidem? Molestiae recusandae, ea
          provident qui omnis aliquid sit tenetur maiores debitis modi beatae
          dolorem labore deleniti, aperiam inventore accusamus! Ipsum delectus
          reprehenderit impedit iste commodi! Aspernatur voluptatem dignissimos
          nisi accusantium quasi nulla veritatis similique saepe? Praesentium
          libero possimus sapiente, nemo, temporibus repudiandae dolorem
          explicabo quo numquam ab optio aliquam dolor doloribus quasi facere
          officiis eum modi id earum vitae necessitatibus asperiores?
          Praesentium fugiat, suscipit nisi vel consequuntur mollitia quis eius
          ducimus quam similique deserunt aut ex accusamus sunt qui minima vero
          eos dolores numquam iste ab amet commodi porro. In eum modi minima
          voluptate? Debitis expedita recusandae eos aut similique officia
          delectus, unde soluta architecto cum, sequi rem cupiditate! Nemo
          quibusdam temporibus, expedita architecto dolorem distinctio ipsam
          natus doloremque tempore nostrum quisquam fuga possimus, corporis
          molestiae eos. Soluta minima voluptatum totam, tenetur voluptatem
          excepturi sit repellendus velit repellat repudiandae, rem eveniet
          aspernatur reiciendis consequuntur. Expedita commodi quo neque
          doloremque, perferendis quam mollitia aliquid cumque qui laudantium
          doloribus dignissimos impedit optio eligendi labore omnis debitis
          beatae possimus voluptates nisi accusantium sunt? Illum atque nostrum
          voluptatum, dolorem necessitatibus neque, aliquid eaque dignissimos et
          qui quos culpa nihil, libero maiores doloremque rem delectus modi
          tempore accusantium consequatur. Neque, fugiat eveniet accusamus modi
          quos hic amet. Adipisci officiis quia earum maxime vero possimus,
          explicabo voluptatem rerum deserunt officia repudiandae voluptatum
          recusandae tenetur blanditiis non nostrum consequuntur sit, doloribus
          accusamus eligendi. Quisquam, repellat provident, libero ratione amet
          delectus commodi, in adipisci reprehenderit eius maxime praesentium
          vel possimus similique ipsam odio vero! Nam eius nobis repudiandae
          voluptate consequatur voluptatum molestias asperiores tempora ipsa
          velit minus in, ea nihil dicta quas modi corporis fuga porro eaque
          amet. In accusantium aperiam rerum quidem iure eos nostrum minus ab
          perferendis magni, cum velit debitis nisi consequuntur nesciunt
          provident odit temporibus pariatur vel maxime ut atque fugiat
          veritatis! Amet vitae ullam consequatur tempora doloribus alias quae
          odio, voluptatum labore ipsam debitis earum veritatis neque aliquid
          accusantium, asperiores quibusdam est nostrum optio, impedit
          aspernatur temporibus ipsa eius ab. Iusto blanditiis libero illum
          debitis facilis fugiat expedita alias sequi, eaque aliquam molestias
          provident similique odio hic nulla cupiditate quod exercitationem nisi
          aspernatur delectus repellendus asperiores pariatur dolor. Quibusdam
          nulla eum saepe accusantium optio harum veritatis aliquid eligendi
          laudantium doloremque, reprehenderit facere ipsa eos est, perferendis
          numquam excepturi dolore sint incidunt sequi quia nobis corrupti
          omnis. Asperiores harum libero numquam dolor fugiat quia, qui
          exercitationem vero unde temporibus saepe fugit atque expedita eum
          explicabo earum perspiciatis distinctio necessitatibus excepturi odio
          delectus nam? Quod placeat earum omnis asperiores rerum deserunt ea
          suscipit labore facere voluptatibus. Ex omnis fuga reprehenderit
          dolorem quas facilis, saepe necessitatibus vitae voluptatum sunt, hic
          recusandae animi? Voluptate doloribus minus labore dignissimos facere
          ipsa molestias quia est ex provident, quas asperiores velit quasi
          adipisci architecto atque accusantium delectus reiciendis, tenetur
          tempora cupiditate, enim fugit culpa praesentium! Quia recusandae a
          aliquid optio iure! Accusantium quas, facilis vitae repellendus animi
          consectetur, illo omnis iure doloribus adipisci excepturi deleniti
          quasi aspernatur quisquam quidem deserunt earum minus quo
          reprehenderit recusandae debitis sint, dignissimos eaque. Iusto eos
          eligendi quia sapiente eum quidem neque sed ullam blanditiis et,
          dolorem dolor cum ex expedita veniam exercitationem, provident tempora
          eaque temporibus molestias ut. Dolorem enim recusandae sequi nam culpa
          illum veritatis veniam iure, impedit magni. Non, maxime harum labore
          asperiores doloribus fugit.
        </p>
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}>
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontWeight='black'>
          Vibe
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href='#'
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        px='4'
        py='1'
        mx='4'
        borderRadius='sm'
        role='group'
        cursor='pointer'
        _hover={{
          bg: useColorModeValue('gray.100', 'gray.700'),
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent='flex-start'
      {...rest}>
      <IconButton
        variant='outline'
        onClick={onOpen}
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text fontSize='2xl' ml='8' fontWeight='black'>
        Vibe
      </Text>
    </Flex>
  );
};
