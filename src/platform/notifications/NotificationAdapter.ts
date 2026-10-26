export type NotificationPermission = 'undetermined' | 'granted' | 'denied';

export interface NotificationAdapter {
  getPermission(): Promise<NotificationPermission>;
  cancel(notificationId: string): Promise<void>;
}
