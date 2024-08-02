import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import HeartIcon from '../../../Assets/heart';  
import EyeIcon from '../../../Assets/eye';      
import DownloadIcon from '../../../Assets/download'; 
import { CardProps } from '../utils/type/image';
import styles from './styleCard';

const Card: React.FC<CardProps> = ({ imageUrl, likes, downloads, views, tags = [], onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>Tags: {tags}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statsItem}>
            <HeartIcon width={20} height={20} color="#DD2E44" />
            <Text style={styles.stats}>{likes}</Text>
          </View>
          <View style={styles.statsItem}>
            <DownloadIcon width={20} height={20} color="#fff" />
            <Text style={styles.stats}>{downloads}</Text>
          </View>
          <View style={styles.statsItem}>
            <EyeIcon width={20} height={20} color="#000" />
            <Text style={styles.stats}>{views}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};



export default Card;
