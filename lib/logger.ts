/**
 * Standardized structured logger for September
 * Ensures logs are easily searchable in Vercel/AWS CloudWatch
 */

type LogContext = Record<string, any>;

function sanitizeContext(context: LogContext): LogContext {
  // Strip out PII like pan, full phone numbers, or raw card data if present
  const safeContext = { ...context };
  if (safeContext.pan) safeContext.pan = '[REDACTED]';
  if (safeContext.contact) {
    // Mask contact if it looks like a phone or email
    const str = String(safeContext.contact);
    safeContext.contact = str.length > 4 ? `${str.slice(0, 2)}***${str.slice(-2)}` : '[REDACTED]';
  }
  return safeContext;
}

export const logger = {
  info: (message: string, context?: LogContext) => {
    console.info(JSON.stringify({
      level: 'INFO',
      timestamp: new Date().toISOString(),
      message,
      ...(context && { context: sanitizeContext(context) })
    }));
  },
  warn: (message: string, context?: LogContext) => {
    console.warn(JSON.stringify({
      level: 'WARN',
      timestamp: new Date().toISOString(),
      message,
      ...(context && { context: sanitizeContext(context) })
    }));
  },
  error: (message: string, error?: any, context?: LogContext) => {
    console.error(JSON.stringify({
      level: 'ERROR',
      timestamp: new Date().toISOString(),
      message,
      error: error instanceof Error ? { message: error.message, stack: error.stack } : error,
      ...(context && { context: sanitizeContext(context) })
    }));
  }
};
