
export type Task = {
  id: string;
  title: string;
  description: string;
};

export type Group = {
  id: string;
  title: string;
  tasks: Task[];
};

export const data: Group[] = [
  {
    "id": "group1",
    "title": "Group One",
    "tasks": [
      {
        "id": "task1",
        "title": "Complete Project Documentation",
        "description": "Write and organize the project documentation for the upcoming release."
      },
      {
        "id": "task2",
        "title": "Design Homepage Banner",
        "description": "Create a new banner design for the homepage to promote the latest features."
      },
      {
        "id": "task3",
        "title": "Fix Login Bug",
        "description": "Investigate and resolve the login issue affecting certain users."
      }
    ]
  },
  {
    "id": "group2",
    "title": "Group Two",
    "tasks": [
      {
        "id": "task4",
        "title": "Update User Roles",
        "description": "Review and update user roles and permissions in the admin panel."
      },
      {
        "id": "task5",
        "title": "Prepare Monthly Report",
        "description": "Compile and analyze data for the monthly performance report."
      },
      {
        "id": "task6",
        "title": "Set Up Continuous Integration",
        "description": "Configure CI/CD pipelines to automate testing and deployment."
      }
    ]
  },
  {
    "id": "group3",
    "title": "Group Three",
    "tasks": [
      {
        "id": "task7",
        "title": "Plan Team Meeting",
        "description": "Schedule and prepare the agenda for the next team meeting."
      },
      {
        "id": "task8",
        "title": "Optimize Database Queries",
        "description": "Analyze and optimize database queries to improve performance."
      },
      {
        "id": "task9",
        "title": "Create Marketing Campaign",
        "description": "Design and launch a marketing campaign for the new product feature."
      }
    ]
  }
]

