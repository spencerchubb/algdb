type AlgSetCase = {
    name: string;
    algs?: string[];
    variants?: {
        name: string;
        algs: string[];
    }[];
};

type AlgSet = {
    name: string;
    puzzle: string;
    description: string[];
    recommended: string[];
    cases: AlgSetCase[];
}