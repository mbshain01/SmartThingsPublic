import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SPACING} from '../utils/constants';
import {Service} from '../types';

const ServicesScreen = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Laser Engraving',
      description:
        'Precision laser engraving for personalized items, awards, gifts, and more. Perfect for adding names, logos, dates, or custom designs.',
      icon: 'edit',
      features: [
        'Personalized gifts and awards',
        'Corporate branding and logos',
        'Wedding and event items',
        'Jewelry and accessories',
        'Photo engraving',
        'Custom text and graphics',
      ],
    },
    {
      id: '2',
      title: 'Laser Cutting',
      description:
        'High-precision laser cutting for creating intricate designs, prototypes, signage, and custom parts from various materials.',
      icon: 'content-cut',
      features: [
        'Custom signage and displays',
        'Architectural models',
        'Product prototypes',
        'Decorative panels and art',
        'Packaging and templates',
        'Intricate designs and patterns',
      ],
    },
  ];

  const applicationAreas = [
    {
      title: 'Personal',
      items: [
        'Wedding favors',
        'Anniversary gifts',
        'Photo frames',
        'Jewelry boxes',
        'Home décor',
      ],
    },
    {
      title: 'Business',
      items: [
        'Corporate gifts',
        'Business cards',
        'Signage',
        'Product branding',
        'Promotional items',
      ],
    },
    {
      title: 'Events',
      items: [
        'Event signage',
        'Awards and trophies',
        'Name tags',
        'Table settings',
        'Party decorations',
      ],
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Services</Text>
        <Text style={styles.headerSubtitle}>
          Professional laser engraving and cutting solutions for all your needs
        </Text>
      </View>

      {/* Services */}
      {services.map(service => (
        <View key={service.id} style={styles.serviceCard}>
          <View style={styles.serviceHeader}>
            <Icon name={service.icon} size={40} color={COLORS.primary} />
            <Text style={styles.serviceTitle}>{service.title}</Text>
          </View>
          <Text style={styles.serviceDescription}>{service.description}</Text>
          
          <Text style={styles.featuresTitle}>What We Offer:</Text>
          <View style={styles.featuresList}>
            {service.features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Icon
                  name="check-circle"
                  size={20}
                  color={COLORS.success}
                  style={styles.featureIcon}
                />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}

      {/* Application Areas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perfect For</Text>
        <View style={styles.applicationGrid}>
          {applicationAreas.map((area, index) => (
            <View key={index} style={styles.applicationCard}>
              <Text style={styles.applicationTitle}>{area.title}</Text>
              {area.items.map((item, itemIndex) => (
                <View key={itemIndex} style={styles.applicationItem}>
                  <Icon
                    name="arrow-right"
                    size={16}
                    color={COLORS.primary}
                  />
                  <Text style={styles.applicationText}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>

      {/* Process Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Process</Text>
        <View style={styles.processContainer}>
          <View style={styles.processStep}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <Text style={styles.stepTitle}>Consultation</Text>
            <Text style={styles.stepDescription}>
              Share your ideas and requirements with us
            </Text>
          </View>
          <View style={styles.processStep}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <Text style={styles.stepTitle}>Design</Text>
            <Text style={styles.stepDescription}>
              We create or refine your design for laser processing
            </Text>
          </View>
          <View style={styles.processStep}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <Text style={styles.stepTitle}>Production</Text>
            <Text style={styles.stepDescription}>
              Your project is carefully crafted using our laser equipment
            </Text>
          </View>
          <View style={styles.processStep}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>4</Text>
            </View>
            <Text style={styles.stepTitle}>Delivery</Text>
            <Text style={styles.stepDescription}>
              Pick up your finished product or arrange delivery
            </Text>
          </View>
        </View>
      </View>

      {/* CTA */}
      <View style={styles.ctaSection}>
        <Icon name="contact-support" size={50} color={COLORS.primary} />
        <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
        <Text style={styles.ctaText}>
          Contact us today to discuss your project and receive a free quote
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Request a Quote</Text>
          <Icon name="arrow-forward" size={20} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.spacer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
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
  serviceCard: {
    backgroundColor: COLORS.card,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    padding: SPACING.lg,
    borderRadius: 12,
  },
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  serviceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginLeft: SPACING.md,
  },
  serviceDescription: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
    marginBottom: SPACING.md,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: SPACING.md,
    marginBottom: SPACING.md,
  },
  featuresList: {
    marginLeft: SPACING.sm,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  featureIcon: {
    marginRight: SPACING.sm,
  },
  featureText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    flex: 1,
  },
  section: {
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  applicationGrid: {
    gap: SPACING.md,
  },
  applicationCard: {
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  applicationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  applicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  applicationText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginLeft: SPACING.sm,
  },
  processContainer: {
    gap: SPACING.md,
  },
  processStep: {
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: 12,
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  stepNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  stepDescription: {
    fontSize: 15,
    color: COLORS.textSecondary,
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
    marginTop: SPACING.md,
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

export default ServicesScreen;
