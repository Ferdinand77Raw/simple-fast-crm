import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SidePanel from '../Components/SidePanel';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        
                    </div>
                </div>
            </div>

            <SidePanel></SidePanel>
        </AuthenticatedLayout>
    );
}
