# Bank Shared Kit

Shared utilities, components, and types for all Flanux Banking frontends.

## What's Inside

- ✅ **API Client** - Base API client with auth interceptors
- ✅ **UI Components** - Button, Card, Input, Modal, Loading
- ✅ **Formatters** - Currency, dates, account numbers, phone numbers
- ✅ **Validators** - Email, phone, password, account numbers, cards
- ✅ **TypeScript Types** - User, Account, Transaction, Loan, Card, etc.
- ✅ **Hooks** - useAuth, useLocalStorage

## Installation

This is meant to be used as a **Git submodule** in your frontend projects.

### Add to your frontend repo:

```bash
git submodule add https://github.com/flanux/bank-shared-kit.git shared
```

### Clone a repo with submodules:

```bash
git clone --recurse-submodules https://github.com/flanux/customer-portal.git
```

Or after cloning:

```bash
git submodule update --init --recursive
```

## Usage

### Import components:

```typescript
import { Button, Card, Input } from '../shared/src/components';

function MyComponent() {
  return (
    <Card title="My Account">
      <Input label="Account Number" value={value} onChange={onChange} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Card>
  );
}
```

### Import utilities:

```typescript
import { formatCurrency, maskAccountNumber } from '../shared/src/utils/formatters';

const amount = formatCurrency(1234.56); // "$1,234.56"
const masked = maskAccountNumber('1234567890'); // "**** **** **** 7890"
```

### Import types:

```typescript
import { User, Account, Transaction } from '../shared/src/types';

const user: User = {
  id: 1,
  username: 'john.doe',
  email: 'john@example.com',
  role: 'CUSTOMER',
};
```

### Use API client:

```typescript
import { BaseApiClient } from '../shared/src/api/apiClient';

const api = new BaseApiClient({
  baseURL: 'https://api.flanuxbank.com/customer',
});

const accounts = await api.get<Account[]>('/accounts/my');
```

### Use hooks:

```typescript
import { useAuth } from '../shared/src/hooks';

function MyComponent() {
  const { user, logout, hasRole } = useAuth();

  if (hasRole('ADMIN')) {
    // Admin-only content
  }

  return <button onClick={logout}>Logout</button>;
}
```

## Update Shared Kit

When shared kit is updated:

```bash
cd shared
git pull origin main
cd ..
git add shared
git commit -m "Update shared kit"
git push
```

## Who Uses This

- ✅ `customer-portal-public`
- ✅ `branch-dashboard-vpn`
- ✅ `central-dashboard-private`

All 3 frontends import from this shared kit to avoid code duplication.

## Development

```bash
npm install
npm run build
npm test
```

## License

PROPRIETARY - Flanux Banking Internal Use Only
