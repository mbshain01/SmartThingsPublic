import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SPACING, COMPANY_INFO} from '../utils/constants';
import {ContactFormData} from '../types';

const ContactScreen = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const serviceTypes = [
    'Laser Engraving',
    'Laser Cutting',
    'Both Services',
    'Other',
  ];

  const updateFormField = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      Alert.alert('Error', 'Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      Alert.alert('Error', 'Please enter your email');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }
    if (!formData.serviceType) {
      Alert.alert('Error', 'Please select a service type');
      return false;
    }
    if (!formData.message.trim()) {
      Alert.alert('Error', 'Please describe your project');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert(
        'Quote Request Submitted',
        `Thank you ${formData.name}! We have received your request and will contact you shortly at ${formData.email}.`,
        [
          {
            text: 'OK',
            onPress: () => {
              setFormData({
                name: '',
                email: '',
                phone: '',
                serviceType: '',
                message: '',
              });
            },
          },
        ],
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {/* Header */}
        <View style={styles.header}>
          <Icon name="contact-mail" size={50} color={COLORS.primary} />
          <Text style={styles.headerTitle}>Request a Quote</Text>
          <Text style={styles.headerSubtitle}>
            Tell us about your project and we'll get back to you with a free
            quote
          </Text>
        </View>

        {/* Contact Form */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Your Information</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Name <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor={COLORS.textSecondary}
              value={formData.name}
              onChangeText={text => updateFormField('name', text)}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Email <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="your.email@example.com"
              placeholderTextColor={COLORS.textSecondary}
              value={formData.email}
              onChangeText={text => updateFormField('email', text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="(555) 123-4567"
              placeholderTextColor={COLORS.textSecondary}
              value={formData.phone}
              onChangeText={text => updateFormField('phone', text)}
              keyboardType="phone-pad"
            />
          </View>

          <Text style={styles.sectionTitle}>Project Details</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Service Type <Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.serviceTypeContainer}>
              {serviceTypes.map(type => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.serviceTypeChip,
                    formData.serviceType === type &&
                      styles.serviceTypeChipActive,
                  ]}
                  onPress={() => updateFormField('serviceType', type)}>
                  <Icon
                    name={
                      formData.serviceType === type
                        ? 'check-circle'
                        : 'radio-button-unchecked'
                    }
                    size={20}
                    color={
                      formData.serviceType === type
                        ? COLORS.text
                        : COLORS.textSecondary
                    }
                  />
                  <Text
                    style={[
                      styles.serviceTypeText,
                      formData.serviceType === type &&
                        styles.serviceTypeTextActive,
                    ]}>
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Project Description <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe your project, including materials, dimensions, quantity, and any special requirements..."
              placeholderTextColor={COLORS.textSecondary}
              value={formData.message}
              onChangeText={text => updateFormField('message', text)}
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Icon name="send" size={20} color={COLORS.text} />
            <Text style={styles.submitButtonText}>Submit Request</Text>
          </TouchableOpacity>
        </View>

        {/* Contact Information */}
        <View style={styles.contactInfoSection}>
          <Text style={styles.sectionTitle}>Other Ways to Reach Us</Text>
          <View style={styles.contactCard}>
            <View style={styles.contactItem}>
              <View style={styles.iconCircle}>
                <Icon name="email" size={24} color={COLORS.primary} />
              </View>
              <View style={styles.contactContent}>
                <Text style={styles.contactLabel}>Email</Text>
                <Text style={styles.contactValue}>{COMPANY_INFO.email}</Text>
              </View>
            </View>

            <View style={styles.contactItem}>
              <View style={styles.iconCircle}>
                <Icon name="phone" size={24} color={COLORS.primary} />
              </View>
              <View style={styles.contactContent}>
                <Text style={styles.contactLabel}>Phone</Text>
                <Text style={styles.contactValue}>{COMPANY_INFO.phone}</Text>
              </View>
            </View>

            <View style={styles.contactItem}>
              <View style={styles.iconCircle}>
                <Icon name="location-on" size={24} color={COLORS.primary} />
              </View>
              <View style={styles.contactContent}>
                <Text style={styles.contactLabel}>Location</Text>
                <Text style={styles.contactValue}>
                  {COMPANY_INFO.location}
                </Text>
              </View>
            </View>

            <View style={styles.contactItem}>
              <View style={styles.iconCircle}>
                <Icon name="language" size={24} color={COLORS.primary} />
              </View>
              <View style={styles.contactContent}>
                <Text style={styles.contactLabel}>Website</Text>
                <Text style={styles.contactValue}>
                  {COMPANY_INFO.website}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Business Hours */}
        <View style={styles.hoursSection}>
          <Text style={styles.sectionTitle}>Business Hours</Text>
          <View style={styles.hoursCard}>
            <View style={styles.hoursRow}>
              <Text style={styles.dayText}>Monday - Friday</Text>
              <Text style={styles.timeText}>9:00 AM - 6:00 PM</Text>
            </View>
            <View style={styles.hoursRow}>
              <Text style={styles.dayText}>Saturday</Text>
              <Text style={styles.timeText}>10:00 AM - 4:00 PM</Text>
            </View>
            <View style={styles.hoursRow}>
              <Text style={styles.dayText}>Sunday</Text>
              <Text style={styles.timeText}>Closed</Text>
            </View>
          </View>
        </View>

        <View style={styles.spacer} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: SPACING.lg,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  formSection: {
    padding: SPACING.md,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
    marginTop: SPACING.sm,
  },
  inputGroup: {
    marginBottom: SPACING.md,
  },
  label: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: SPACING.sm,
    fontWeight: '600',
  },
  required: {
    color: COLORS.error,
  },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: SPACING.md,
    color: COLORS.text,
    fontSize: 16,
  },
  textArea: {
    minHeight: 120,
    paddingTop: SPACING.md,
  },
  serviceTypeContainer: {
    gap: SPACING.sm,
  },
  serviceTypeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: SPACING.md,
    gap: SPACING.sm,
  },
  serviceTypeChipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  serviceTypeText: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  serviceTypeTextActive: {
    color: COLORS.text,
    fontWeight: '600',
  },
  submitButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.lg,
    gap: SPACING.sm,
  },
  submitButtonText: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactInfoSection: {
    padding: SPACING.md,
  },
  contactCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: SPACING.md,
    gap: SPACING.md,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  contactContent: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '600',
  },
  hoursSection: {
    padding: SPACING.md,
  },
  hoursCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: SPACING.md,
    gap: SPACING.md,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '600',
  },
  timeText: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  spacer: {
    height: SPACING.xl,
  },
});

export default ContactScreen;
