type AlgSetCase = {
    name: string;
    algs?: string[];
    variants?: {
        name: string;
        algs: string[];
    }[];
};

type AlgSet = {
    puzzle: string;
    description: string[];
    recommended: string[];
    cases: AlgSetCase[];
}