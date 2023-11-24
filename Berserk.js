import {SafeAreaView,Text,Image,ScrollView,StyleSheet,View} from 'react-native';

export default function Berserk(){
  return (
    

    

      <SafeAreaView style={estilo.container}>
    <ScrollView>
                <Text style={estilo.titulo}>
                Berserk
                </Text>
             
         
                          <Image style ={estilo.imagem} source={require("./assets/Guts.png")} />

          


          <Text style={estilo.titulo}>
                   Berserk: A Épica Escuridão de Kentaro Miura
                </Text>
   

        
        
                   <Text style={estilo.textop1}>
          

Berserk é uma obra-prima do mundo dos mangás e animes, criada pelo renomado autor Kentaro Miura
. Este sombrio e violento conto de fantasia medieval mergulha os leitores em um mundo brutal e desolado, onde os destinos dos personagens são moldados por forças sombrias e misteriosas. A história é centrada em Guts, um guerreiro solitário com uma espada gigante, que luta para sobreviver em um universo repleto de demônios e intrigas. Ao lado de Guts, encontramos Griffith, um carismático líder que lidera um grupo de mercenários chamado "A Tropa do Falcão". As relações complexas entre esses dois personagens, juntamente com o contexto sombrio e ação intensa, fazem de Berserk uma narrativa cativante que continua a conquistar fãs em todo o mundo.
                </Text>

           

                <Text style={estilo.tituloper}>
                Guts: O Espadachim Marcado
                </Text>

                <Image  style={estilo.imagem1} source={require('./assets/GutsBerserk.png')}/>

                <Text style={estilo.textop1}>
          

Guts é o personagem central de Berserk, e sua jornada é tão brutal quanto sua espada gigante. Desde jovem, ele foi marcado por um destino cruel e uma infância terrível. Conhecido como "O Espadachim Negro", Guts é um guerreiro de incrível habilidade e força, com uma determinação inabalável de sobreviver e buscar vingança contra os demônios que arruinaram sua vida. Ele é um homem de poucas palavras, mas suas ações falam mais alto. Guts luta contra demônios e humanos em sua busca implacável por vingança, e sua complexa jornada pessoal é uma das partes mais fascinantes de Berserk.
                </Text>




                  <Text style={estilo.tituloper}>
            Griffith: O Líder Carismático da Tropa do Falcão
                </Text>

                <Image  style={estilo.imagem1} source={require('./assets/Griffith.webp')}/>

                <Text style={estilo.textop1}>
          

Griffith é o líder carismático da Tropa do Falcão, um grupo de mercenários talentosos e leais. Sua aparência e personalidade cativantes o tornam uma figura de destaque no mundo de Berserk. Ambicioso e determinado, Griffith almeja alcançar o seu próprio reino e está disposto a sacrificar tudo para atingir esse objetivo. Ele é um personagem complexo, admirado por muitos, mas também sombriamente misterioso. Sua relação com Guts é uma das peças centrais da narrativa, e à medida que a história avança, os segredos de Griffith se tornam cada vez mais obscuros e intrigantes.
                </Text>

                             <Text style={estilo.tituloper}>
         Caska: A Guerreira com um Passado Traumático
                </Text>

                <Image  style={estilo.imagem1} source={require('./assets/Caska.webp')}/>

                <Text style={estilo.textop1}>
          

Caska é a única mulher na Tropa do Falcão e uma guerreira feroz. Ela possui um passado traumático e é profundamente afetada pelos eventos que presencia durante a história. Caska é uma personagem complexa, com uma forte determinação e um lado vulnerável. Sua relação com Guts evolui ao longo da narrativa, proporcionando momentos de intensa emoção. Caska desempenha um papel fundamental na história e é uma personagem cuja evolução ao longo da série é digna de atenção.

Esses são apenas alguns dos personagens principais de Berserk, uma obra rica e sombria que explora suas personalidades e relacionamentos em meio a um mundo repleto de violência, magia e demônios. A história de cada personagem é entrelaçada em uma narrativa épica que continua a cativar e surpreender os leitores.
                </Text>

          
              </ScrollView>

</SafeAreaView>

  

    
  
  );
}

const estilo = StyleSheet.create ({

container:{
    flex:1,
 
    justifycontent:'center',
    backgroundColor:'#000000',
    width:395,
    height:800
  },
 
  imagem:
  {
    width:350,
    height:300,
   marginTop:30,
   left:20,
    borderRadius:30,
  },
  imagem1:
{ 
  width:350, 
  height:500,
  left:22.5,
   marginTop:30,
  borderRadius:30,
  },  
  
  titulo:
  {
      textAlign: 'center',
      color:'#8B0000',
      fontSize:30,
      marginTop: 5 ,
  },
   textop1:
  {   marginTop:25,
        fontSize: 20,
      textAlign: 'center',
      color:'#8B0000'
  },

  tituloper:
  {
    marginTop:10,
      fontSize: 30,
      textAlign: 'center',
      color:'#8B0000'
  }
 
  }
  );