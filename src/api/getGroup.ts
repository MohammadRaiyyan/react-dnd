export type GroupType = {
    id: string,
    type: {
        label: string,
        value: string
    }
}

export default function getGroups(): GroupType[] {
    return [{
        id: "group1",
        type: {
            label: "Group One",
            value: "group1"
        }
    },
    {
        id: "group2",
        type: {
            label: "Group Two",
            value: "group2"
        }
    },
    {
        id: "group3",
        type: {
            label: "Group Three",
            value: "group3"
        }
    }
    ]
}