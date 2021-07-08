export interface IMenu {
    label: string,
    icon: string,
    url: string,
    open: boolean,
    children: Array<IMenuChildren>
}

interface IMenuChildren {
    label: string,
    url: string
}

export const MENU = [
    {
        label: 'Componentes',
        icon: 'uil-sitemap',
        url: '/components',
        open: false,
        children: [
            {
                label: 'Buttons',
                url: '/components/button'
            },
            {
                label: 'Alerts',
                url: '/components/alerts'
            },
            {
                label: 'Badges',
                url: '/components/badges'
            },
            {
                label: 'Forms',
                url: '/components/form'
            },
            {
                label: 'Assign',
                url: '/components/assign'
            },
            {
                label: 'Breadcrumb',
                url: '/components/breadcrumb'
            },
            {
                label: 'Card',
                url: '/components/card'
            },
            {
                label: 'Collapsible',
                url: '/components/collapsible'
            },
            {
                label: 'Dropdown',
                url: '/components/dropdown'
            },
            {
                label: 'Filter',
                url: '/components/filter'
            },
        ]
    },
    {
        label: 'Layout',
        icon: 'uil-web-grid-alt',
        url: '/layout',
        open: false,
        children: [
            {
                label: 'Grid',
                url: '/layout/grid'
            }
        ]
    }
]