import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import HeartIcon from '../../../Assets/heart';  
import EyeIcon from '../../../Assets/eye';      
import DownloadIcon from '../../../Assets/download'; 
import { CardProps } from '../utils/type/image';

const Card: React.FC<CardProps> = ({ imageUrl, likes, downloads, views, tags = [], onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>Tags: {tags}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statsItem}>
            <HeartIcon width={16} height={16} color="#DD2E44" />
            <Text style={styles.stats}>{likes}</Text>
          </View>
          <View style={styles.statsItem}>
            <DownloadIcon width={16} height={16} color="#000" />
            <Text style={styles.stats}>{downloads}</Text>
          </View>
          <View style={styles.statsItem}>
            <EyeIcon width={16} height={16} color="#000" />
            <Text style={styles.stats}>{views}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stats: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
    marginBottom: 5,
  },
});

export default Card;
