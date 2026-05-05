export type UseItem = {
  name: string;
  label?: string;
  link?: string;
};

export type UseCategory = {
  category: string;
  items: readonly UseItem[];
};

export const USES: readonly UseCategory[] = [
  {
    category: 'Desk',
    items: [{ name: 'Tischkönig Flex v2 Adjustable', label: 'Standing desk' }],
  },
  {
    category: 'Computer',
    items: [
      { name: 'MacBook Pro M3', label: 'Daily driver' },
      {
        name: 'AMD Ryzen 9 5900X · MSI Meg X570 Ace · Asus GTX 1070 · 32GB G.Skill Trident Z Neo · Seagate Firecuda 530 1TB · Corsair RM850x · Corsair 5000D',
        label: 'Tower',
      },
    ],
  },
  {
    category: 'Display & Audio',
    items: [
      { name: 'ViewSonic VP3268-4K', label: 'IPS monitor' },
      { name: 'SteelSeries Arctis Pro Wireless', label: 'Headset' },
      { name: 'Anker Soundcore Motion+', label: 'Bluetooth speaker' },
    ],
  },
  {
    category: 'Peripherals',
    items: [
      { name: 'Logitech G915 TKL Lightspeed', label: 'Wireless keyboard' },
      { name: 'Logitech G502 Lightspeed', label: 'Wireless mouse' },
    ],
  },
  {
    category: 'Software',
    items: [
      { name: 'Cursor', label: 'Editor' },
      { name: 'iTerm2 + zsh', label: 'Shell' },
      { name: 'Raycast', label: 'Launcher' },
      { name: '1Password', label: 'Secrets' },
      { name: 'Linear', label: 'Tracking' },
    ],
  },
  {
    category: 'Editor & Dotfiles',
    items: [
      { name: 'Cursor settings', label: 'Synced via Cursor account' },
      {
        name: 'Custom zsh config',
        label: 'Mostly defaults + a handful of aliases',
      },
    ],
  },
] as const;
