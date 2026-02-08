// src/types/index.ts

export interface User {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  customerId?: number;
  employeeId?: number;
  branchId?: number;
}

export type UserRole =
  | 'CUSTOMER'
  | 'TELLER'
  | 'LOAN_OFFICER'
  | 'BRANCH_MANAGER'
  | 'COMPLIANCE_OFFICER'
  | 'EXECUTIVE'
  | 'ADMIN';

export interface Account {
  id: number;
  accountNumber: string;
  accountType: AccountType;
  balance: number;
  currency: string;
  status: AccountStatus;
  customerId: number;
  createdAt: string;
}

export type AccountType =
  | 'SAVINGS'
  | 'CHECKING'
  | 'FIXED_DEPOSIT'
  | 'CURRENT'
  | 'SALARY';

export type AccountStatus = 'ACTIVE' | 'INACTIVE' | 'FROZEN' | 'CLOSED';

export interface Transaction {
  id: number;
  transactionId: string;
  fromAccountId?: number;
  toAccountId?: number;
  amount: number;
  currency: string;
  transactionType: TransactionType;
  transactionStatus: TransactionStatus;
  description: string;
  createdAt: string;
  completedAt?: string;
}

export type TransactionType =
  | 'DEPOSIT'
  | 'WITHDRAWAL'
  | 'TRANSFER'
  | 'PAYMENT'
  | 'FEE'
  | 'INTEREST_CREDIT'
  | 'REVERSAL';

export type TransactionStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'COMPLETED'
  | 'FAILED'
  | 'REVERSED';

export interface Loan {
  id: number;
  loanNumber: string;
  loanType: LoanType;
  principalAmount: number;
  outstandingBalance: number;
  interestRate: number;
  loanTermMonths: number;
  monthlyPayment: number;
  nextPaymentDate: string;
  loanStatus: LoanStatus;
  customerId: number;
}

export type LoanType =
  | 'PERSONAL'
  | 'HOME'
  | 'AUTO'
  | 'EDUCATION'
  | 'BUSINESS';

export type LoanStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'ACTIVE'
  | 'PAID_OFF'
  | 'DEFAULTED'
  | 'REJECTED';

export interface Card {
  id: number;
  cardNumber: string;
  lastFourDigits: string;
  cardType: CardType;
  cardNetwork: CardNetwork;
  expiryDate: string;
  cardStatus: CardStatus;
  accountId: number;
  customerId: number;
}

export type CardType = 'DEBIT' | 'CREDIT' | 'PREPAID' | 'VIRTUAL';

export type CardNetwork = 'VISA' | 'MASTERCARD' | 'AMEX' | 'DISCOVER' | 'RUPAY';

export type CardStatus = 'ACTIVE' | 'BLOCKED' | 'EXPIRED' | 'LOST' | 'STOLEN';

export interface Notification {
  id: number;
  userId: number;
  notificationType: NotificationType;
  title: string;
  message: string;
  priority: NotificationPriority;
  isRead: boolean;
  createdAt: string;
}

export type NotificationType =
  | 'TRANSACTION'
  | 'LOAN'
  | 'CARD'
  | 'ACCOUNT'
  | 'SECURITY'
  | 'SYSTEM';

export type NotificationPriority = 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  customerType: CustomerType;
  customerStatus: CustomerStatus;
  kycStatus: KycStatus;
}

export type CustomerType = 'INDIVIDUAL' | 'CORPORATE' | 'JOINT';

export type CustomerStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'CLOSED';

export type KycStatus = 'PENDING' | 'IN_REVIEW' | 'VERIFIED' | 'REJECTED' | 'EXPIRED';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}
