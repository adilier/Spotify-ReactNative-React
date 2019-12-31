/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';

export default class Home extends Component {
  render() {
    const musicas1 = [
      {
        id: 1,
        nome: 'Melhores de 2019',
        foto:
          'https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/r/retrospectiva-spotify-11-19-1400-1400.jpg',
      },
      {
        id: 2,
        nome: 'Astroworld',
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpWK6577G_9-VEL6p42ON2WHtgt7SdySLzkoiwnBwI8XGjn1V5',
      },
      {
        id: 3,
        nome: 'Luv Is Rage 2',
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbOWY7KUbmPGNyt3qCh7I6Xn7sgB83mDmq2kN92ffGz-VWAHP2',
      },
      {
        id: 4,
        nome: 'Doka Language',
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp1IemeqDkm9I3Rn4RoObfGlYW2GzSyd-vtUvUXr5NXsH1F8ek',
      },
    ];

    const musicas2 = [
      {
        id: 1,
        nome: 'Lofi Hip Hop',
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCIuIiTeb_uB6AkbuN61fzumDkPS0h06RnkhQZj9cmO3fXHdEE',
      },
      {
        id: 2,
        nome: 'Bad Vibes Forever',
        foto:
          'https://rapcurrent.com/wp-content/uploads/2019/12/xxxtentacion-bad-vibes-forever-album-stream-download-2019-1.jpg',
      },
      {
        id: 3,
        nome: 'Acústico Duzz',
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrAJfUGAAGZgLDIvw7X2_5u7KLrxi4s_G6bXHTTeC6N1wp0w6r',
      },
      {
        id: 4,
        nome: 'Californication',
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQm8TGsXbiumPUziUhKpYB2wAjSnh3e5KNNpbUPUAHMY2wxJWqQ',
      },
    ];

    const musicas3 = [
      {
        id: 1,
        nome: 'come over when You...',
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-3qSlwFMKeQiutltga7-twWTubNk9sZYM49Zqbmm1grNL_hZ9',
      },
      {
        id: 2,
        nome: 'Total Xanarchy',
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQf4ywavN2CdCZrykOfDr71RAm5CUU2frctEodkFuPpXc6MVVT1',
      },
      {
        id: 3,
        nome: 'A love letter to you',
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjei49TP672ew_sWIqnuM1wQ0Il2CZtuocw5Teszg8DtAQs9XT',
      },
      {
        id: 4,
        nome: 'Bohemian Rhapsody',
        foto:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdRthX0IddW6RZZZpRG2Sl20z-G-2CHXrkhZAy3jThlvfyBt9W',
      },
    ];
    return (
      <View style={styles.contentColor}>
        <ScrollView style={styles.content}>
          <View>
            <Text style={styles.titleHome}>Spotify</Text>
          </View>
          <View style={styles.containerPlaylist}>
            <Text style={styles.titlePlaylist}>Tocadas recentemente</Text>
            <ScrollView style={styles.slider} horizontal>
              {musicas1.map(musica => 
                  <View key={musica.id} style={styles.containerImages}>
                    <Image
                      style={styles.smallImages}
                      source={{uri: musica.foto}}
                    />
                    <Text style={styles.nomePlaylist}>{musica.nome}</Text>
                  </View>
                )
              } 
            </ScrollView>
          </View>
          <View style={styles.containerPlaylist}>
            <Text style={styles.titlePlaylist}>Não sai dos seus ouvidos</Text>
            <ScrollView style={styles.slider} horizontal>
              {musicas2.map(musica => 
                  <View key={musica.id} style={styles.containerImages}>
                    <Image
                      style={styles.bigImages}
                      source={{uri: musica.foto}}
                    />
                    <Text style={styles.nomePlaylist}>{musica.nome}</Text>
                  </View>
                )
              } 
            </ScrollView>
          </View>
          <View style={styles.containerPlaylist, styles.finalPlaylist}>
            <Text style={styles.titlePlaylist}>Álbuns favoritos</Text>
            <ScrollView style={styles.slider} horizontal>
              {musicas3.map(musica => 
                  <View key={musica.id} style={styles.containerImages}>
                    <Image
                      style={styles.bigImages}
                      source={{uri: musica.foto}}
                    />
                    <Text style={styles.nomePlaylist}>{musica.nome}</Text>
                  </View>
                )
              } 
            </ScrollView>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.musicName}>Bad Vibes Forever</Text>
          <Text style={styles.singerName}> - XXXtentacion</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentColor: {
    backgroundColor: '#191414',
  },
  content: {
    padding: 10,
  },
  slider: {
    marginTop: 10,
    marginBottom: 10,
  },
  titleHome: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'left',
  },
  containerPlaylist: {
    marginTop: 30,
  },
  titlePlaylist: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  smallImages: {
    width: 120,
    height: 120,
  },
  nomePlaylist: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
  },
  containerImages: {
    marginRight: 15,
  },
  bigImages: {
    width: 160,
    height: 160,
  },
  finalPlaylist: {
    marginBottom: 70,
    marginTop: 30
  },
  footer: {
    backgroundColor: '#282828',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  musicName: {
    color: '#E8E8E8',
    fontWeight: 'bold',
    fontSize: 15,
  },
  singerName: {
    color: '#9E9E9E',
    fontWeight: 'bold',
    fontSize: 15,
  }
});
