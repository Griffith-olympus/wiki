module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'home',
    'rules',
    'bug-bounty',
    'shop-rotations',
    {
      type: 'category',
      label: 'Useful links',
      items: [
        { type: 'link', label: 'Website', href: 'https://dashboard.olympusgg.com', },
        { type: 'link', label: 'Discord', href: 'https://discord.gg/olympusgg', },
        { type: 'link', label: 'Support', href: 'https://discord.gg/U3pMwCg59Q', },
        { type: 'link', label: 'ElitePvPers', href: 'https://www.elitepvpers.com/forum/nostale-pserver-advertising/4966630-international-olympus-ascend-opening-20-11-2021-a.html', },
      ]
    },
    {
      type: 'category',
      label: 'Custom Features',
      items: [
        {
          type: 'autogenerated',
          dirName: 'custom-features'
        }
      ]
    },
    {
      type: 'category',
      label: 'Quality Of Life',
      items: [
        { type: 'doc', id: 'qol/exploration', label: 'Exploration' },
        { type: 'doc', id: 'qol/mass-crafting', label: 'Mass Crafting' },
        { type: 'doc', id: 'qol/upgrades', label: 'Upgrades' },
        { type: 'doc', id: 'qol/npc-shops', label: 'New NPC Shops' },
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'SP Quests guide',
          items: [
            { type: 'doc', id: 'guides/sp-guides/sp1', label: 'SP1' },
            { type: 'doc', id: 'guides/sp-guides/sp2', label: 'SP2' },
            { type: 'doc', id: 'guides/sp-guides/sp3', label: 'SP3' },
            { type: 'doc', id: 'guides/sp-guides/sp4', label: 'SP4' },
            { type: 'doc', id: 'guides/sp-guides/sp5-to-sp8', label: 'SP5 to SP8' },
          ]
        },
        {
          type: 'category',
          label: 'Leveling',
          items: [
            { type: 'autogenerated', dirName: 'guides/leveling' }
          ]
        },
        {
          type: 'category',
          label: 'Raids',
          items: [
            { type: 'autogenerated', dirName: 'guides/raids' }
          ]
        },
        {
          type: 'category',
          label: 'Crafting',
          items: [
            { type: 'autogenerated', dirName: 'guides/crafting' }
          ]
        },
        {
          type: 'category',
          label: 'Game Features',
          items: [
            { type: 'autogenerated', dirName: 'guides/features' }
          ]
        },
        {
          type: 'category',
          label: 'Quests',
          items: [
            { type: 'doc', id: 'guides/quests/act-6-questline', label: 'Act 6 Questline guide' },
            { type: 'doc', id: 'guides/quests/act-6-daily-quests', label: 'Act 6 Daily Quests guide' },
          ]
        },
        { type: 'doc', id: 'guides/hero-equipment', label: 'Hero Equipment guide' },
        { type: 'doc', id: 'guides/eq-progression', label: 'Equipment Progression guide' },
      ]
    },
    {
      type: 'category',
      label: 'Information',
      items: [
        {
          type: 'category',
          label: 'SP cards',
          items: [
            { type: 'doc', id: 'information/sp-cards/swordsman', label: 'Swordsman' },
            { type: 'doc', id: 'information/sp-cards/archer', label: 'Archer' },
            { type: 'doc', id: 'information/sp-cards/mage', label: 'Mage' },
          ]
        },
        { type: 'doc', id: 'information/raidboxes', label: 'Raid Boxes' },
        { type: 'doc', id: 'information/mounts', label: 'Mounts' },
        { type: 'doc', id: 'information/titles', label: 'Titles' },
        { type: 'doc', id: 'information/shells', label: 'Shell Options' },
        { type: 'doc', id: 'information/items-sale-price', label: 'Items sale price' },
        { type: 'doc', id: 'information/customized-coinshop', label: 'Customized Coinshop Items' },
        { type: 'doc', id: 'information/wings-rework', label: 'SP Wings Effects' },
        { type: 'doc', id: 'information/equipment-act62-rework', label: 'Act6.2 Equipment Rework' },
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
