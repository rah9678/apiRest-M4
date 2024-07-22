

import { Reference } from "../models/reference.model.js";
import { referenceList } from "./reference.controller.js"; 

export const addInitialReferences = () => {
    const references = [
        { name: "Elza Soares", biography: "Cantora icônica da música brasileira, conhecida por seu trabalho no samba e outros gêneros musicais.", category: "Cantora", photo_url: "https://oespecialista.com.br/wp-content/uploads/2022/01/elza-soares-2-518x307.jpg" },
        { name: "Emicida", biography: "Rapper, cantor e compositor, conhecido por suas letras engajadas e seu impacto na música brasileira contemporânea.", category: "Músico", photo_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Frevistamarieclaire.globo.com%2FCultura%2Fnoticia%2F2020%2F12%2Femicida.html&psig=AOvVaw30zm1C0jqK6q-Y3yWcDKHN&ust=1721732393609000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCND3j5W_uocDFQAAAAAdAAAAABAE" },
        { name: "Fernando Holiday", biography: "Vereador de São Paulo e ativista político, conhecido por seu trabalho na política brasileira.", category: "Político", photo_url: "uhttps://pbs.twimg.com/profile_images/1576717310617915393/AENtXD_P_400x400.jpg" },
        { name: "Maju Coutinho", biography: "Jornalista e apresentadora, primeira mulher negra a apresentar o Jornal Nacional.", category: "Jornalista", photo_url: "uhttps://veja.abril.com.br/wp-content/uploads/2019/02/maju-coutinho-jornal-hoje.jpg?quality=90&strip=info&w=720&h=440&crop=1" },
        { name: "Martin Luther King Jr.", biography: "Líder do movimento dos direitos civis nos Estados Unidos, conhecido por sua defesa da não violência e igualdade racial.", category: "Ativista", photo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8s2k7BEMs6TlprZ9hM_jKa4Oi872f79zssA&s" },
        { name: "Nelson Mandela", biography: "Primeiro presidente negro da África do Sul, líder anti-apartheid e vencedor do Prêmio Nobel da Paz.", category: "Político", photo_url: "https://ajn1.com.br/wp-content/uploads/2024/07/nelson-mandela-700x525.jpg" },
        { name: "Maya Angelou", biography: "Poeta, escritora e ativista dos direitos civis, conhecida por suas autobiografias e obras literárias.", category: "Escritora", photo_url: "https://s2.glbimg.com/RbT8CLP8gbiRiUwEC69XQHPlGYQ=/e.glbimg.com/og/ed/f/original/2022/01/11/gettyimages-88195979.jpg" },
        { name: "Malcolm X", biography: "Ativista dos direitos humanos e líder do movimento pelos direitos dos afro-americanos nos Estados Unidos.", category: "Ativista", photo_url: "https://www.gov.br/palmares/pt-br/assuntos/noticias/19-de-maio-2013-nascia-malcolm-x/mx-600x338.jpg/@@images/4963aefd-ff46-432f-83c5-852378e29388.jpeg" },
        { name: "Harriet Tubman", biography: "Abolicionista que ajudou centenas de escravos a escaparem pela Ferrovia Subterrânea.", category: "Ativista", photo_url: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/EE43/production/_89359906_gettyimages-477456482.jpg.webp" },
        { name: "Marva Johnson", biography: "Vice-Presidente da Comcast, conhecida por seu trabalho em diversidade e inclusão no setor de tecnologia.", category: "Executiva", photo_url: "https://lastinger.center.ufl.edu/wp-content/uploads/2022/11/marva-johnson-crop.png" },
        { name: "David Robinson II", biography: "Cofundador da The Hidden Genius Project, que capacita jovens negros e latinos em tecnologia e empreendedorismo.", category: "Empreendedor", photo_url: "https://theminorityeye.com/wp-content/uploads/2024/06/david-roberson-for-congress-south-carolina-1024x535.png" },
        { name: "Dr. Timnit Gebru", biography: "Pesquisadora em inteligência artificial e ética na tecnologia, cofundadora do Black in AI.", category: "Pesquisadora", photo_url: "https://c.files.bbci.co.uk/B817/production/_115872174_gettyimages-1028811898.jpg" },


    ];


    references.forEach(ref => {
        let reference = new Reference(ref.id, ref.name, ref.biography, ref.category, ref.photo_url);
        referenceList.push(reference);
    });
};


