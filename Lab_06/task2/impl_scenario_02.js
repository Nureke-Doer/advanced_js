// Старый банковский интерфейс (Legacy)
const LegacyBankGateway = {
  processPayment(cardNumber, amount, currencyCode) {
    console.log(`[Legacy] Charged ${amount} ${currencyCode} to card ${String(cardNumber).slice(-4)}`);
    return { success: true, transactionId: 'TXN-' + Date.now() };
  }
};

// Адаптер, который приводит старый код к новому интерфейсу
class PaymentAdapter {
  constructor(legacyGateway) {
    this.legacyGateway = legacyGateway;
  }

  // Современный интерфейс: принимает один объект с параметрами
  charge({ amount, currency, cardToken }) {
    // Переводим вызов в формат старой системы
    return this.legacyGateway.processPayment(cardToken, amount, currency);
  }
}

// Демонстрация
const adapter = new PaymentAdapter(LegacyBankGateway);
const result = adapter.charge({ 
  amount: 15000, 
  currency: 'KZT', 
  cardToken: '4400550066007700' 
});

console.log('[SCENARIO_02] Результат платежа через адаптер:', result.success);