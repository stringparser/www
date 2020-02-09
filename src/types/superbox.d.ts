declare module 'superbox' {
    type SuperBoxProps = {
        bg: any;
        color: any;
        css: any;
        fontSize: any;
        m: any;
        mb: any;
        ml: any;
        mr: any;
        mt: any;
        mx: any;
        my: any;
        p: any;
        pb: any;
        pl: any;
        pr: any;
        pt: any;
        px: any;
        py: any;
        width: any;
        children: React.ReactNode;
    };

    export default class SuperBox extends React.Component<Partial<SuperBoxProps>> { }
}