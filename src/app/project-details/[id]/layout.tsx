import { Metadata } from 'next';
import { getProjectById } from '@/data/projects';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = getProjectById(projectId);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} | Ravindra Verma`,
    description: project.shortDes,
    openGraph: {
      title: `${project.title} | Ravindra Verma`,
      description: project.shortDes,
      url: `https://ravindraverma.tech/project-details/${projectId}`,
      type: 'website',
    },
    twitter: {
      title: `${project.title} | Ravindra Verma`,
      description: project.shortDes,
    },
    alternates: {
      canonical: `https://ravindraverma.tech/project-details/${projectId}`,
    },
  };
}

export default function ProjectDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
