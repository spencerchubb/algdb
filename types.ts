type AlgSetCase = {
    name: string;
    setup?: string;
    algs?: string[];
    variants?: {
        name: string;
        algs: string[];
    }[];
}

type AlgSet = {
    puzzle: string;
    description: string[];
    recommended: string[];
    setup?: string;
    cases: AlgSetCase[];
}