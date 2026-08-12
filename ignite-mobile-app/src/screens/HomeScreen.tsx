import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SPACING, COMPANY_INFO} from '../utils/constants';

const HomeScreen = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    Alert.alert(
      'Success',
      'Thank you for signing up! We will keep you updated on our services.',
      [{text: 'OK', onPress: () => setEmail('')}],
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.logoContainer}>
          <Icon name="local-fire-department" size={80} color={COLORS.primary} />
        </View>
        <Text style={styles.companyName}>{COMPANY_INFO.name}</Text>
        <Text style={styles.tagline}>{COMPANY_INFO.tagline}</Text>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Welcome</Text>
        <Text style={styles.sectionText}>
          Ignite Laser Engraving offers professional laser engraving and cutting
          services in Sonoma County. We specialize in creating custom,
          high-quality products for personal and business use.
        </Text>
        <Text style={styles.sectionText}>
          From personalized gifts to commercial signage, our state-of-the-art
          laser technology delivers precision and detail in every project.
        </Text>
      </View>

      {/* Features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Us?</Text>
        <View style={styles.featureGrid}>
          <View style={styles.featureCard}>
            <Icon name="high-quality" size={40} color={COLORS.primary} />
            <Text style={styles.featureTitle}>High Quality</Text>
            <Text style={styles.featureText}>
              Professional-grade laser equipment for precise results
            </Text>
          </View>
          <View style={styles.featureCard}>
            <Icon name="speed" size={40} color={COLORS.primary} />
            <Text style={styles.featureTitle}>Fast Turnaround</Text>
            <Text style={styles.featureText}>
              Quick production times without compromising quality
            </Text>
          </View>
          <View style={styles.featureCard}>
            <Icon name="brush" size={40} color={COLORS.primary} />
            <Text style={styles.featureTitle}>Custom Design</Text>
            <Text style={styles.featureText}>
              Bring your ideas to life with custom designs
            </Text>
          </View>
          <View style={styles.featureCard}>
            <Icon name="support-agent" size={40} color={COLORS.primary} />
            <Text style={styles.featureTitle}>Expert Support</Text>
            <Text style={styles.featureText}>
              Dedicated team to help with your project
            </Text>
          </View>
        </View>
      </View>

      {/* Materials Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Materials We Work With</Text>
        <View style={styles.materialsContainer}>
          <View style={styles.materialChip}>
            <Text style={styles.materialText}>Wood</Text>
          </View>
          <View style={styles.materialChip}>
            <Text style={styles.materialText}>Acrylic</Text>
          </View>
          <View style={styles.materialChip}>
            <Text style={styles.materialText}>Leather</Text>
          </View>
          <View style={styles.materialChip}>
            <Text style={styles.materialText}>Metal</Text>
          </View>
          <View style={styles.materialChip}>
            <Text style={styles.materialText}>Glass</Text>
          </View>
          <View style={styles.materialChip}>
            <Text style={styles.materialText}>Fabric</Text>
          </View>
          <View style={styles.materialChip}>
            <Text style={styles.materialText}>Paper</Text>
          </View>
          <View style={styles.materialChip}>
            <Text style={styles.materialText}>Cardboard</Text>
          </View>
        </View>
      </View>

      {/* Newsletter Signup */}
      <View style={styles.newsletterSection}>
        <Icon name="mail-outline" size={40} color={COLORS.primary} />
        <Text style={styles.newsletterTitle}>Stay Updated</Text>
        <Text style={styles.newsletterText}>
          Sign up for our newsletter to receive updates and special offers
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor={COLORS.textSecondary}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleNewsletterSignup}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Contact Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Get In Touch</Text>
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Icon name="location-on" size={24} color={COLORS.primary} />
            <Text style={styles.contactText}>{COMPANY_INFO.location}</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon name="email" size={24} color={COLORS.primary} />
            <Text style={styles.contactText}>{COMPANY_INFO.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon name="phone" size={24} color={COLORS.primary} />
            <Text style={styles.contactText}>{COMPANY_INFO.phone}</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2026 {COMPANY_INFO.name}. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.md,
    backgroundColor: COLORS.card,
    marginBottom: SPACING.md,
  },
  logoContainer: {
    marginBottom: SPACING.md,
  },
  companyName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  tagline: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
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
  sectionText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
    marginBottom: SPACING.md,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: SPACING.sm,
    marginBottom: SPACING.xs,
    textAlign: 'center',
  },
  featureText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  materialsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  materialChip: {
    backgroundColor: COLORS.card,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  materialText: {
    color: COLORS.text,
    fontSize: 14,
  },
  newsletterSection: {
    backgroundColor: COLORS.card,
    padding: SPACING.lg,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    borderRadius: 12,
    alignItems: 'center',
  },
  newsletterTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
  },
  newsletterText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  inputContainer: {
    width: '100%',
    marginTop: SPACING.sm,
  },
  input: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: SPACING.md,
    color: COLORS.text,
    fontSize: 16,
    marginBottom: SPACING.md,
  },
  signupButton: {
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  signupButtonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactInfo: {
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  contactText: {
    color: COLORS.text,
    fontSize: 16,
    marginLeft: SPACING.md,
  },
  footer: {
    padding: SPACING.lg,
    alignItems: 'center',
  },
  footerText: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
});

export default HomeScreen;
