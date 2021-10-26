module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'home',
    {
      type: 'category',
      label: 'Useful links',
      items: [
        { type: 'link', label: 'Website', href: 'https://dashboard.olympusgg.com', },
        { type: 'link', label: 'Discord', href: 'https://discord.com/olympusgg', }
      ]
    },
    {
      type: 'category',
      label: 'Custom Features',
      items: [
        { type: 'doc', id: 'custom-features/achievements', label: 'Achievements' },
        { type: 'doc', id: 'custom-features/pocket-dimensions', label: 'Pocket Dimensions' },
        { type: 'doc', id: 'custom-features/loyalty-system', label: 'Loyalty System' },
        { type: 'doc', id: 'custom-features/npc-buffers', label: 'NPC Buffers' },
        { type: 'doc', id: 'custom-features/trophy-system', label: 'Trophy System' },
      ]
    },
    {
      type: 'category',
      label: 'Quality Of Life',
      items: [
        { type: 'doc', id: 'qol/exploration', label: 'Exploration' },
        { type: 'doc', id: 'qol/mass-crafting', label: 'Mass Crafting' },
        { type: 'doc', id: 'qol/upgrades', label: 'Upgrades' },
      ]
    },
    {
      type: 'category',
      label: 'General guides',
      items: [
        { type: 'doc', id: 'guides/fast-level-up', label: 'Fast Level Up' },
      ]
    },
    {
      type: 'category',
      label: 'SP guides',
      items: [
        { type: 'doc', id: 'sp-guides/sp1', label: 'SP1' },
        { type: 'doc', id: 'sp-guides/sp2', label: 'SP2' },
        { type: 'doc', id: 'sp-guides/sp3', label: 'SP3' },
        { type: 'doc', id: 'sp-guides/sp4', label: 'SP4' },
      ]
    },
    {
      type: 'category',
      label: 'Drops',
      items: [
        {
          type: 'category',
          label: 'Item drops',
          items: [
            {
              type: 'autogenerated',
              dirName: 'drops/items'
            }
          ]
        },
        {
          type: 'category',
          label: 'Map drops',
          items: [
            {
              type: 'autogenerated',
              dirName: 'drops/maps'
            }
          ]
        },
      ]
    }
  ]

};
