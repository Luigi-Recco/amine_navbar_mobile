import {SafeAreaView,Text,Image,ScrollView,StyleSheet} from 'react-native';

export default function Berserk(){
  return (
    
    <ScrollView>
    

      <SafeAreaView style={estilo.container}>

                <Text style={estilo.textop}>
                "One Piece" é um popular mangá e anime japonês criado por Eiichiro Oda. A história segue Monkey D. Luffy, um jovem que ganha poderes de borracha após comer uma Fruta do Diabo, e sua busca para encontrar o tesouro lendário conhecido como One Piece e se tornar o Rei dos Piratas. Luffy forma uma tripulação diversificada e carismática, incluindo Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, Jinbe e outros, cada um com habilidades únicas.

A série se passa em um vasto mundo composto por oceanos, ilhas e continentes, onde governos corruptos, piratas cruéis e poderosas forças marítimas coexistem. O Grande Roteiro, a organização governamental mundial, desempenha um papel central na trama. Ao longo da jornada, Luffy e sua tripulação enfrentam inúmeros desafios, vilões formidáveis e desvendam mistérios relacionados ao passado de cada membro.

A narrativa é conhecida por sua rica mitologia, personagens cativantes, reviravoltas emocionantes e cenas de ação intensas. Oda explora temas como amizade, coragem, liberdade e a busca pelos próprios sonhos. Com uma trama épica, "One Piece" tornou-se uma das obras mais longas e bem-sucedidas do mundo dos mangás e animes.
                </Text>

                <Image source={("./assets/Luffy.webp")} style={estilo.img}/>
          

      </SafeAreaView>

    </ScrollView>

    
  
  );
}

const estilo = StyleSheet.create ({

container:{
    flex:1,
    alignitems:'center',
    justifycontent:'center',
    backgroundColor:'blue'
  },
  
  img:
  {
   with:100,
   borderradius:30 
  },
  
  textop:
  {
      fontsize: 'bold',
      marginTop: 10,
      textAlign:'center',
      color:'white'

  },
 
  }
  );