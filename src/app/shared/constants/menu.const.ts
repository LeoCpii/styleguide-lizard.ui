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
                label: 'Botões',
                url: '/components/button'
            },
            {
                label: 'Alertas',
                url: '/components/alerts'
            },
            {
                label: 'Badges',
                url: '/components/badges'
            }
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