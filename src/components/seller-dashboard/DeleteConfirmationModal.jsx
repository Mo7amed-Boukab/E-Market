import { Trash2 } from 'lucide-react';

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, itemName, itemType = 'item' }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/5 animate-in fade-in duration-200">
            <div className="bg-white rounded-sm shadow-xl w-full max-w-md p-6 m-4 animate-in zoom-in-95 duration-200">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-700 shrink-0">
                            <Trash2 size={20} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Delete {itemType}</h3>
                            <p className="text-sm text-gray-500">
                                Are you sure you want to delete <span className="font-medium text-gray-900">{itemName}</span>?
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-2">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-200 rounded-sm text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 bg-red-700 text-white rounded-sm hover:bg-red-800 font-medium text-sm transition-colors"
                        >
                            Confirm Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
