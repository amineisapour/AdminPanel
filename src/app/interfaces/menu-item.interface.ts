export interface MenuItem {
    id: number;
    title: string;
    icon: string;
    path: string;
    children?: MenuItem[] | null;
}
