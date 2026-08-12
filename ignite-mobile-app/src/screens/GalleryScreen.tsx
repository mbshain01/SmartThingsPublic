import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SPACING} from '../utils/constants';
import {GalleryItem} from '../types';

const {width} = Dimensions.get('window');
const CARD_WIDTH = (width - SPACING.md * 3) / 2;

const GalleryScreen = () => {
  const [filter, setFilter] = useState<'all' | 'engraving' | 'cutting'>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Custom Wood Sign',
      description: 'Personalized family name sign on natural wood',
      imageUrl: 'placeholder',
      category: 'engraving',
    },
    {
      id: '2',
      title: 'Acrylic Ornament',
      description: 'Intricate laser-cut holiday ornament',
      imageUrl: 'placeholder',
      category: 'cutting',
    },
    {
      id: '3',
      title: 'Leather Wallet',
      description: 'Engraved monogram on premium leather',
      imageUrl: 'placeholder',
      category: 'engraving',
    },
    {
      id: '4',
      title: 'Wedding Invitation',
      description: 'Delicate laser-cut wedding invite',
      imageUrl: 'placeholder',
      category: 'cutting',
    },
    {
      id: '5',
      title: 'Corporate Award',
      description: 'Elegant engraved crystal trophy',
      imageUrl: 'placeholder',
      category: 'engraving',
    },
    {
      id: '6',
      title: 'Decorative Panel',
      description: 'Geometric pattern cut in wood',
      imageUrl: 'placeholder',
      category: 'cutting',
    },
    {
      id: '7',
      title: 'Photo Engraving',
      description: 'Portrait etched on wood plaque',
      imageUrl: 'placeholder',
      category: 'engraving',
    },
    {
      id: '8',
      title: 'Business Cards',
      description: 'Unique laser-cut wooden cards',
      imageUrl: 'placeholder',
      category: 'cutting',
    },
    {
      id: '9',
      title: 'Wine Bottle',
      description: 'Custom engraved glass bottle',
      imageUrl: 'placeholder',
      category: 'engraving',
    },
    {
      id: '10',
      title: 'Wall Art',
      description: 'Layered acrylic art piece',
      imageUrl: 'placeholder',
      category: 'cutting',
    },
  ];

  const filteredItems =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.category === filter);

  const getCategoryIcon = (category: string) => {
    return category === 'engraving' ? 'edit' : 'content-cut';
  };

  return (
    <View style={styles.container}>
      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterTab, filter === 'all' && styles.activeFilterTab]}
          onPress={() => setFilter('all')}>
          <Text
            style={[
              styles.filterText,
              filter === 'all' && styles.activeFilterText,
            ]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterTab,
            filter === 'engraving' && styles.activeFilterTab,
          ]}
          onPress={() => setFilter('engraving')}>
          <Text
            style={[
              styles.filterText,
              filter === 'engraving' && styles.activeFilterText,
            ]}>
            Engraving
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterTab,
            filter === 'cutting' && styles.activeFilterTab,
          ]}
          onPress={() => setFilter('cutting')}>
          <Text
            style={[
              styles.filterText,
              filter === 'cutting' && styles.activeFilterText,
            ]}>
            Cutting
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Our Work</Text>
          <Text style={styles.headerSubtitle}>
            Explore our portfolio of laser engraving and cutting projects
          </Text>
        </View>

        {/* Gallery Grid */}
        <View style={styles.gridContainer}>
          {filteredItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.galleryCard}
              activeOpacity={0.8}>
              <View style={styles.imagePlaceholder}>
                <Icon
                  name={getCategoryIcon(item.category)}
                  size={50}
                  color={COLORS.primary}
                />
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription} numberOfLines={2}>
                  {item.description}
                </Text>
                <View style={styles.categoryBadge}>
                  <Icon
                    name={getCategoryIcon(item.category)}
                    size={14}
                    color={COLORS.text}
                  />
                  <Text style={styles.categoryText}>
                    {item.category === 'engraving' ? 'Engraving' : 'Cutting'}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Info Section */}
        <View style={styles.infoSection}>
          <Icon name="info-outline" size={40} color={COLORS.primary} />
          <Text style={styles.infoTitle}>
            These are examples of our work
          </Text>
          <Text style={styles.infoText}>
            Each project is custom-made to meet our clients' specific needs. Your
            design can be as unique as you imagine!
          </Text>
        </View>

        {/* CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Have a Project in Mind?</Text>
          <Text style={styles.ctaText}>
            Let's bring your vision to life with our laser services
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Get Started</Text>
            <Icon name="arrow-forward" size={20} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  filterContainer: {
    flexDirection: 'row',
    padding: SPACING.md,
    gap: SPACING.sm,
    backgroundColor: COLORS.card,
  },
  filterTab: {
    flex: 1,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  activeFilterTab: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  activeFilterText: {
    color: COLORS.text,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: SPACING.lg,
    backgroundColor: COLORS.card,
    marginBottom: SPACING.md,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: SPACING.md,
    justifyContent: 'space-between',
  },
  galleryCard: {
    width: CARD_WIDTH,
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginBottom: SPACING.md,
    overflow: 'hidden',
  },
  imagePlaceholder: {
    width: '100%',
    height: CARD_WIDTH,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    padding: SPACING.md,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  itemDescription: {
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 18,
    marginBottom: SPACING.sm,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    alignSelf: 'flex-start',
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: 12,
    gap: SPACING.xs,
  },
  categoryText: {
    fontSize: 12,
    color: COLORS.text,
    fontWeight: '600',
  },
  infoSection: {
    backgroundColor: COLORS.card,
    marginHorizontal: SPACING.md,
    marginVertical: SPACING.md,
    padding: SPACING.lg,
    borderRadius: 12,
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  ctaSection: {
    backgroundColor: COLORS.card,
    marginHorizontal: SPACING.md,
    padding: SPACING.lg,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  ctaText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  ctaButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderRadius: 8,
    alignItems: 'center',
    gap: SPACING.sm,
  },
  ctaButtonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  spacer: {
    height: SPACING.md,
  },
});

export default GalleryScreen;
