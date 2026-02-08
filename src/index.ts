// src/index.ts
// Main entry point for bank-shared-kit

// API
export { BaseApiClient } from './api/apiClient';
export type { ApiConfig } from './api/apiClient';

// Components
export { Button, Card, Input, Modal, Loading } from './components';

// Utils
export {
  formatCurrency,
  formatDate,
  formatDateTime,
  maskAccountNumber,
  maskCardNumber,
  formatPhoneNumber,
  truncateText,
  calculatePercentage,
  formatFileSize,
} from './utils/formatters';

export {
  isValidEmail,
  isValidPhoneNumber,
  validatePassword,
  isValidAccountNumber,
  isValidAmount,
  isValidSSN,
  isValidCardNumber,
  isValidCVV,
  isNotPastDate,
} from './utils/validators';

// Types
export type {
  User,
  UserRole,
  Account,
  AccountType,
  AccountStatus,
  Transaction,
  TransactionType,
  TransactionStatus,
  Loan,
  LoanType,
  LoanStatus,
  Card,
  CardType,
  CardNetwork,
  CardStatus,
  Notification,
  NotificationType,
  NotificationPriority,
  Customer,
  CustomerType,
  CustomerStatus,
  KycStatus,
  ApiResponse,
} from './types';

// Hooks
export { useAuth, useLocalStorage } from './hooks';
